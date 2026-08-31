import { useState, useEffect, useRef } from 'react';
import { TOP_40_COUNTRIES, WORLD_BASE_STATS } from '../data/countriesData';
import type { CountryData } from '../data/countriesData';

export interface LiveCountry extends CountryData {
    currentPopulation: number;
    currentGDP: number;
    popPulsing: boolean;
    gdpDirection: 'up' | 'down' | 'none';
}

export interface LiveWorldStats {
    worldPopulation: number;
    birthsToday: number;
    deathsToday: number;
    growthToday: number;
    worldGDP: number;
    gdpAddedToday: number;
    gdpGrowthPerSecWorld: number;
}

export function usePopulationTicker(soundEnabled: boolean = false) {
    const [worldStats, setWorldStats] = useState<LiveWorldStats>({
        worldPopulation: WORLD_BASE_STATS.worldPopulation,
        birthsToday: WORLD_BASE_STATS.birthsToday,
        deathsToday: WORLD_BASE_STATS.deathsToday,
        growthToday: WORLD_BASE_STATS.growthToday,
        worldGDP: WORLD_BASE_STATS.worldGDP,
        gdpAddedToday: WORLD_BASE_STATS.gdpAddedToday,
        gdpGrowthPerSecWorld: WORLD_BASE_STATS.gdpGrowthPerSecWorld,
    });

    const [countries, setCountries] = useState<LiveCountry[]>(() =>
        TOP_40_COUNTRIES.map((c) => ({
            ...c,
            currentPopulation: c.basePopulation,
            currentGDP: c.baseGDP,
            popPulsing: false,
            gdpDirection: 'none',
        }))
    );

    const startTimeRef = useRef<number>(Date.now());
    const lastSoundTimeRef = useRef<number>(0);

    const playTickSound = () => {
        if (!soundEnabled) return;
        try {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            gain.gain.setValueAtTime(0.015, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } catch {
            // audio context fallback
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsedSec = (Date.now() - startTimeRef.current) / 1000;

            const addedBirths = Math.floor(elapsedSec * WORLD_BASE_STATS.birthsPerSecWorld);
            const addedDeaths = Math.floor(elapsedSec * WORLD_BASE_STATS.deathsPerSecWorld);
            const addedWorldPop = addedBirths - addedDeaths;

            // Simulate realistic market/forex micro-fluctuations in global GDP
            const isNegativeTick = Math.random() < 0.15; // 15% chance of minor dip
            const gdpDeltaFactor = isNegativeTick ? -0.4 : 1.0;
            const addedWorldGDP = Math.floor(elapsedSec * WORLD_BASE_STATS.gdpGrowthPerSecWorld * gdpDeltaFactor);

            setWorldStats({
                worldPopulation: WORLD_BASE_STATS.worldPopulation + addedWorldPop,
                birthsToday: WORLD_BASE_STATS.birthsToday + addedBirths,
                deathsToday: WORLD_BASE_STATS.deathsToday + addedDeaths,
                growthToday: WORLD_BASE_STATS.growthToday + addedWorldPop,
                worldGDP: WORLD_BASE_STATS.worldGDP + addedWorldGDP,
                gdpAddedToday: Math.max(0, WORLD_BASE_STATS.gdpAddedToday + addedWorldGDP),
                gdpGrowthPerSecWorld: WORLD_BASE_STATS.gdpGrowthPerSecWorld,
            });

            setCountries((prevCountries) =>
                prevCountries.map((c) => {
                    const netRate = c.birthRatePerSec - c.deathRatePerSec;
                    const addedPop = Math.floor(elapsedSec * netRate);
                    const newPop = c.basePopulation + addedPop;

                    // Micro-fluctuation simulation per country GDP (80% growth, 20% minor market drop)
                    const countryDip = Math.random() < 0.20;
                    const cDeltaFactor = countryDip ? -0.3 : 1.0;
                    const addedGDP = Math.floor(elapsedSec * c.gdpGrowthPerSec * cDeltaFactor);
                    const newGDP = c.baseGDP + addedGDP;

                    const popChanged = newPop !== c.currentPopulation;
                    let gdpDir: 'up' | 'down' | 'none' = 'none';

                    if (newGDP > c.currentGDP) {
                        gdpDir = 'up';
                    } else if (newGDP < c.currentGDP) {
                        gdpDir = 'down';
                    }

                    return {
                        ...c,
                        currentPopulation: newPop,
                        currentGDP: newGDP,
                        popPulsing: popChanged,
                        gdpDirection: gdpDir,
                    };
                })
            );

            if (soundEnabled && Date.now() - lastSoundTimeRef.current > 900) {
                playTickSound();
                lastSoundTimeRef.current = Date.now();
            }
        }, 250);

        return () => clearInterval(interval);
    }, [soundEnabled]);

    return { worldStats, countries };
}
