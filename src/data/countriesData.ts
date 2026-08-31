export interface CountryData {
  rank: number;
  name: string;
  code: string; // ISO 3166-1 alpha-2 lowercase for flagcdn
  flagEmoji: string;
  basePopulation: number;
  birthRatePerSec: number; // births per second
  deathRatePerSec: number; // deaths per second
}

export const TOP_40_COUNTRIES: CountryData[] = [
  { rank: 1, name: "India", code: "in", flagEmoji: "🇮🇳", basePopulation: 1485060404, birthRatePerSec: 0.76, deathRatePerSec: 0.31 },
  { rank: 2, name: "China", code: "cn", flagEmoji: "🇨🇳", basePopulation: 1412713259, birthRatePerSec: 0.32, deathRatePerSec: 0.38 },
  { rank: 3, name: "U.S.A.", code: "us", flagEmoji: "🇺🇸", basePopulation: 350039640, birthRatePerSec: 0.12, deathRatePerSec: 0.09 },
  { rank: 4, name: "Indonesia", code: "id", flagEmoji: "🇮🇩", basePopulation: 289292586, birthRatePerSec: 0.15, deathRatePerSec: 0.05 },
  { rank: 5, name: "Pakistan", code: "pk", flagEmoji: "🇵🇰", basePopulation: 262312229, birthRatePerSec: 0.19, deathRatePerSec: 0.05 },
  { rank: 6, name: "Nigeria", code: "ng", flagEmoji: "🇳🇬", basePopulation: 245845929, birthRatePerSec: 0.24, deathRatePerSec: 0.07 },
  { rank: 7, name: "Brazil", code: "br", flagEmoji: "🇧🇷", basePopulation: 214165153, birthRatePerSec: 0.09, deathRatePerSec: 0.04 },
  { rank: 8, name: "Bangladesh", code: "bd", flagEmoji: "🇧🇩", basePopulation: 178822190, birthRatePerSec: 0.09, deathRatePerSec: 0.03 },
  { rank: 9, name: "Russia", code: "ru", flagEmoji: "🇷🇺", basePopulation: 143193628, birthRatePerSec: 0.04, deathRatePerSec: 0.06 },
  { rank: 10, name: "Ethiopia", code: "et", flagEmoji: "🇪🇹", basePopulation: 140910477, birthRatePerSec: 0.12, deathRatePerSec: 0.03 },
  { rank: 11, name: "Mexico", code: "mx", flagEmoji: "🇲🇽", basePopulation: 133600145, birthRatePerSec: 0.06, deathRatePerSec: 0.02 },
  { rank: 12, name: "Japan", code: "jp", flagEmoji: "🇯🇵", basePopulation: 122026072, birthRatePerSec: 0.02, deathRatePerSec: 0.05 },
  { rank: 13, name: "Egypt", code: "eg", flagEmoji: "🇪🇬", basePopulation: 121105321, birthRatePerSec: 0.07, deathRatePerSec: 0.02 },
  { rank: 14, name: "Philippines", code: "ph", flagEmoji: "🇵🇭", basePopulation: 118728617, birthRatePerSec: 0.06, deathRatePerSec: 0.02 },
  { rank: 15, name: "DR Congo", code: "cd", flagEmoji: "🇨🇩", basePopulation: 118661283, birthRatePerSec: 0.12, deathRatePerSec: 0.03 },
  { rank: 16, name: "Vietnam", code: "vn", flagEmoji: "🇻🇳", basePopulation: 102579089, birthRatePerSec: 0.04, deathRatePerSec: 0.02 },
  { rank: 17, name: "Iran", code: "ir", flagEmoji: "🇮🇷", basePopulation: 93570155, birthRatePerSec: 0.04, deathRatePerSec: 0.015 },
  { rank: 18, name: "Turkey", code: "tr", flagEmoji: "🇹🇷", basePopulation: 88227325, birthRatePerSec: 0.035, deathRatePerSec: 0.015 },
  { rank: 19, name: "Germany", code: "de", flagEmoji: "🇩🇪", basePopulation: 83604092, birthRatePerSec: 0.025, deathRatePerSec: 0.035 },
  { rank: 20, name: "Tanzania", code: "tz", flagEmoji: "🇹🇿", basePopulation: 73768755, birthRatePerSec: 0.07, deathRatePerSec: 0.018 },
  { rank: 21, name: "Thailand", code: "th", flagEmoji: "🇹🇭", basePopulation: 71619862, birthRatePerSec: 0.018, deathRatePerSec: 0.019 },
  { rank: 22, name: "United Kingdom", code: "gb", flagEmoji: "🇬🇧", basePopulation: 70072108, birthRatePerSec: 0.022, deathRatePerSec: 0.021 },
  { rank: 23, name: "France", code: "fr", flagEmoji: "🇫🇷", basePopulation: 66826732, birthRatePerSec: 0.021, deathRatePerSec: 0.020 },
  { rank: 24, name: "South Africa", code: "za", flagEmoji: "🇿🇦", basePopulation: 65774410, birthRatePerSec: 0.035, deathRatePerSec: 0.018 },
  { rank: 25, name: "Kenya", code: "ke", flagEmoji: "🇰🇪", basePopulation: 59238899, birthRatePerSec: 0.042, deathRatePerSec: 0.012 },
  { rank: 26, name: "Italy", code: "it", flagEmoji: "🇮🇹", basePopulation: 58825751, birthRatePerSec: 0.013, deathRatePerSec: 0.022 },
  { rank: 27, name: "Myanmar", code: "mm", flagEmoji: "🇲🇲", basePopulation: 55385648, birthRatePerSec: 0.026, deathRatePerSec: 0.014 },
  { rank: 28, name: "Colombia", code: "co", flagEmoji: "🇨🇴", basePopulation: 54056723, birthRatePerSec: 0.022, deathRatePerSec: 0.010 },
  { rank: 29, name: "Sudan", code: "sd", flagEmoji: "🇸🇩", basePopulation: 54086035, birthRatePerSec: 0.045, deathRatePerSec: 0.012 },
  { rank: 30, name: "Uganda", code: "ug", flagEmoji: "🇺🇬", basePopulation: 53564785, birthRatePerSec: 0.052, deathRatePerSec: 0.011 },
  { rank: 31, name: "South Korea", code: "kr", flagEmoji: "🇰🇷", basePopulation: 51580305, birthRatePerSec: 0.008, deathRatePerSec: 0.012 },
  { rank: 32, name: "Iraq", code: "iq", flagEmoji: "🇮🇶", basePopulation: 48609924, birthRatePerSec: 0.038, deathRatePerSec: 0.008 },
  { rank: 33, name: "Algeria", code: "dz", flagEmoji: "🇩🇿", basePopulation: 48429992, birthRatePerSec: 0.030, deathRatePerSec: 0.008 },
  { rank: 34, name: "Spain", code: "es", flagEmoji: "🇪🇸", basePopulation: 47830710, birthRatePerSec: 0.011, deathRatePerSec: 0.015 },
  { rank: 35, name: "Argentina", code: "ar", flagEmoji: "🇦🇷", basePopulation: 46204563, birthRatePerSec: 0.020, deathRatePerSec: 0.011 },
  { rank: 36, name: "Afghanistan", code: "af", flagEmoji: "🇦🇫", basePopulation: 45649556, birthRatePerSec: 0.040, deathRatePerSec: 0.010 },
  { rank: 37, name: "Yemen", code: "ye", flagEmoji: "🇾🇪", basePopulation: 43363311, birthRatePerSec: 0.032, deathRatePerSec: 0.008 },
  { rank: 38, name: "Angola", code: "ao", flagEmoji: "🇦🇴", basePopulation: 41018495, birthRatePerSec: 0.045, deathRatePerSec: 0.010 },
  { rank: 39, name: "Canada", code: "ca", flagEmoji: "🇨🇦", basePopulation: 40728805, birthRatePerSec: 0.011, deathRatePerSec: 0.010 },
  { rank: 40, name: "Morocco", code: "ma", flagEmoji: "🇲🇦", basePopulation: 38723899, birthRatePerSec: 0.019, deathRatePerSec: 0.007 }
];

export const WORLD_BASE_STATS = {
  worldPopulation: 8286289057,
  birthsToday: 205967,
  deathsToday: 94430,
  growthToday: 111537,
  birthsPerSecWorld: 4.35,
  deathsPerSecWorld: 1.95,
};
