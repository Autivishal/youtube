const API_KEY = 'y9sxm2zXIcGu0kcnFkkbqTb47x2NJSoVkIiZiXo8';
const BASE_URL = 'https://api.api-ninjas.com/v1/country';

export interface ApiCountryResult {
    name: string;
    population: number; // population count (or in thousands depending on API response format)
    pop_growth?: number;
}

export async function fetchCountryRealData(countryName: string): Promise<number | null> {
    try {
        const response = await fetch(`${BASE_URL}?name=${encodeURIComponent(countryName)}`, {
            headers: {
                'X-Api-Key': API_KEY,
            },
        });

        if (!response.ok) {
            return null;
        }

        const data: ApiCountryResult[] = await response.json();
        if (data && data.length > 0 && typeof data[0].population === 'number') {
            const rawPop = data[0].population;
            // API-Ninjas returns population in thousands (e.g. 1380004 for ~1.38B) for some countries or exact count for others
            const realPop = rawPop < 10000000 ? Math.round(rawPop * 1000) : rawPop;
            return realPop;
        }
        return null;
    } catch {
        return null;
    }
}
