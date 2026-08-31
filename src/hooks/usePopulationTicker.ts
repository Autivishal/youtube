import { useState, useEffect, useRef } from 'react';
import { TOP_40_COUNTRIES, WORLD_BASE_STATS } from '../data/countriesData';
import type { CountryData } from '../data/countriesData';

export interface LiveCountry extends CountryData {
    currentPopulation: number;
    isPulsing: boolean;
}

export interface LiveWorldStats {
    worldPopulation: number;
    birthsToday: number;
    deathsToday: number;
    growthToday: number;
}

export function usePopulationTicker(soundEnabled: boolean = false) {
    const [worldStats, setWorldStats] = useState<LiveWorldStats>({
        worldPopulation: WORLD_BASE_STATS.worldPopulation,
        birthsToday: WORLD_BASE_STATS.birthsToday,
        deathsToday: WORLD_BASE_STATS.deathsToday,
        growthToday: WORLD_BASE_STATS.growthToday,
    });

    const [countries, setCountries] = useState<LiveCountry[]>(() =>
        TOP_40_COUNTRIES.map((c) => ({
            ...c,
            currentPopulation: c.basePopulation,
            isPulsing: false,
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

            setWorldStats({
                worldPopulation: WORLD_BASE_STATS.worldPopulation + addedWorldPop,
                birthsToday: WORLD_BASE_STATS.birthsToday + addedBirths,
                deathsToday: WORLD_BASE_STATS.deathsToday + addedDeaths,
                growthToday: WORLD_BASE_STATS.growthToday + addedWorldPop,
            });

            setCountries((prevCountries) =>
                prevCountries.map((c) => {
                    const netRate = c.birthRatePerSec - c.deathRatePerSec;
                    const addedPop = Math.floor(elapsedSec * netRate);
                    const newPop = c.basePopulation + addedPop;
                    const hasChanged = newPop !== c.currentPopulation;

                    return {
                        ...c,
                        currentPopulation: newPop,
                        isPulsing: hasChanged,
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
