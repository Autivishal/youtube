export interface CountryData {
  rank: number;
  gdpRank: number;
  name: string;
  code: string; // ISO 3166-1 alpha-2 lowercase for flagcdn
  flagEmoji: string;
  basePopulation: number;
  birthRatePerSec: number; // births per second
  deathRatePerSec: number; // deaths per second
  baseGDP: number; // Nominal GDP in USD
  gdpGrowthPerSec: number; // GDP growth rate in USD per second
}

export const TOP_40_COUNTRIES: CountryData[] = [
  { rank: 1, gdpRank: 5, name: "India", code: "in", flagEmoji: "🇮🇳", basePopulation: 1485060404, birthRatePerSec: 0.76, deathRatePerSec: 0.31, baseGDP: 3940000000000, gdpGrowthPerSec: 8800 },
  { rank: 2, gdpRank: 2, name: "China", code: "cn", flagEmoji: "🇨🇳", basePopulation: 1412713259, birthRatePerSec: 0.32, deathRatePerSec: 0.38, baseGDP: 18530000000000, gdpGrowthPerSec: 28000 },
  { rank: 3, gdpRank: 1, name: "U.S.A.", code: "us", flagEmoji: "🇺🇸", basePopulation: 350039640, birthRatePerSec: 0.12, deathRatePerSec: 0.09, baseGDP: 28780000000000, gdpGrowthPerSec: 42500 },
  { rank: 4, gdpRank: 15, name: "Indonesia", code: "id", flagEmoji: "🇮🇩", basePopulation: 289292586, birthRatePerSec: 0.15, deathRatePerSec: 0.05, baseGDP: 1370000000000, gdpGrowthPerSec: 2200 },
  { rank: 5, gdpRank: 38, name: "Pakistan", code: "pk", flagEmoji: "🇵🇰", basePopulation: 262312229, birthRatePerSec: 0.19, deathRatePerSec: 0.05, baseGDP: 340000000000, gdpGrowthPerSec: 400 },
  { rank: 6, gdpRank: 39, name: "Nigeria", code: "ng", flagEmoji: "🇳🇬", basePopulation: 245845929, birthRatePerSec: 0.24, deathRatePerSec: 0.07, baseGDP: 252000000000, gdpGrowthPerSec: 300 },
  { rank: 7, gdpRank: 9, name: "Brazil", code: "br", flagEmoji: "🇧🇷", basePopulation: 214165153, birthRatePerSec: 0.09, deathRatePerSec: 0.04, baseGDP: 2330000000000, gdpGrowthPerSec: 2100 },
  { rank: 8, gdpRank: 32, name: "Bangladesh", code: "bd", flagEmoji: "🇧🇩", basePopulation: 178822190, birthRatePerSec: 0.09, deathRatePerSec: 0.03, baseGDP: 450000000000, gdpGrowthPerSec: 800 },
  { rank: 9, gdpRank: 11, name: "Russia", code: "ru", flagEmoji: "🇷🇺", basePopulation: 143193628, birthRatePerSec: 0.04, deathRatePerSec: 0.06, baseGDP: 2060000000000, gdpGrowthPerSec: 1800 },
  { rank: 10, gdpRank: 40, name: "Ethiopia", code: "et", flagEmoji: "🇪🇹", basePopulation: 140910477, birthRatePerSec: 0.12, deathRatePerSec: 0.03, baseGDP: 205000000000, gdpGrowthPerSec: 450 },
  { rank: 11, gdpRank: 12, name: "Mexico", code: "mx", flagEmoji: "🇲🇽", basePopulation: 133600145, birthRatePerSec: 0.06, deathRatePerSec: 0.02, baseGDP: 1810000000000, gdpGrowthPerSec: 1600 },
  { rank: 12, gdpRank: 4, name: "Japan", code: "jp", flagEmoji: "🇯🇵", basePopulation: 122026072, birthRatePerSec: 0.02, deathRatePerSec: 0.05, baseGDP: 4110000000000, gdpGrowthPerSec: 3200 },
  { rank: 13, gdpRank: 37, name: "Egypt", code: "eg", flagEmoji: "🇪🇬", basePopulation: 121105321, birthRatePerSec: 0.07, deathRatePerSec: 0.02, baseGDP: 350000000000, gdpGrowthPerSec: 550 },
  { rank: 14, gdpRank: 33, name: "Philippines", code: "ph", flagEmoji: "🇵🇭", basePopulation: 118728617, birthRatePerSec: 0.06, deathRatePerSec: 0.02, baseGDP: 440000000000, gdpGrowthPerSec: 750 },
  { rank: 15, gdpRank: 41, name: "DR Congo", code: "cd", flagEmoji: "🇨🇩", basePopulation: 118661283, birthRatePerSec: 0.12, deathRatePerSec: 0.03, baseGDP: 70000000000, gdpGrowthPerSec: 150 },
  { rank: 16, gdpRank: 31, name: "Vietnam", code: "vn", flagEmoji: "🇻🇳", basePopulation: 102579089, birthRatePerSec: 0.04, deathRatePerSec: 0.02, baseGDP: 470000000000, gdpGrowthPerSec: 900 },
  { rank: 17, gdpRank: 20, name: "Iran", code: "ir", flagEmoji: "🇮🇷", basePopulation: 93570155, birthRatePerSec: 0.04, deathRatePerSec: 0.015, baseGDP: 830000000000, gdpGrowthPerSec: 950 },
  { rank: 18, gdpRank: 16, name: "Turkey", code: "tr", flagEmoji: "🇹🇷", basePopulation: 88227325, birthRatePerSec: 0.035, deathRatePerSec: 0.015, baseGDP: 1110000000000, gdpGrowthPerSec: 1800 },
  { rank: 19, gdpRank: 3, name: "Germany", code: "de", flagEmoji: "🇩🇪", basePopulation: 83604092, birthRatePerSec: 0.025, deathRatePerSec: 0.035, baseGDP: 4590000000000, gdpGrowthPerSec: 4800 },
  { rank: 20, gdpRank: 42, name: "Tanzania", code: "tz", flagEmoji: "🇹🇿", basePopulation: 73768755, birthRatePerSec: 0.07, deathRatePerSec: 0.018, baseGDP: 85000000000, gdpGrowthPerSec: 180 },
  { rank: 21, gdpRank: 25, name: "Thailand", code: "th", flagEmoji: "🇹🇭", basePopulation: 71619862, birthRatePerSec: 0.018, deathRatePerSec: 0.019, baseGDP: 520000000000, gdpGrowthPerSec: 500 },
  { rank: 22, gdpRank: 6, name: "United Kingdom", code: "gb", flagEmoji: "🇬🇧", basePopulation: 70072108, birthRatePerSec: 0.022, deathRatePerSec: 0.021, baseGDP: 3500000000000, gdpGrowthPerSec: 2800 },
  { rank: 23, gdpRank: 7, name: "France", code: "fr", flagEmoji: "🇫🇷", basePopulation: 66826732, birthRatePerSec: 0.021, deathRatePerSec: 0.020, baseGDP: 3130000000000, gdpGrowthPerSec: 2200 },
  { rank: 24, gdpRank: 36, name: "South Africa", code: "za", flagEmoji: "🇿🇦", basePopulation: 65774410, birthRatePerSec: 0.035, deathRatePerSec: 0.018, baseGDP: 375000000000, gdpGrowthPerSec: 350 },
  { rank: 25, gdpRank: 43, name: "Kenya", code: "ke", flagEmoji: "🇰🇪", basePopulation: 59238899, birthRatePerSec: 0.042, deathRatePerSec: 0.012, baseGDP: 115000000000, gdpGrowthPerSec: 220 },
  { rank: 26, gdpRank: 8, name: "Italy", code: "it", flagEmoji: "🇮🇹", basePopulation: 58825751, birthRatePerSec: 0.013, deathRatePerSec: 0.022, baseGDP: 2330000000000, gdpGrowthPerSec: 1200 },
  { rank: 27, gdpRank: 44, name: "Myanmar", code: "mm", flagEmoji: "🇲🇲", basePopulation: 55385648, birthRatePerSec: 0.026, deathRatePerSec: 0.014, baseGDP: 65000000000, gdpGrowthPerSec: 100 },
  { rank: 28, gdpRank: 35, name: "Colombia", code: "co", flagEmoji: "🇨🇴", basePopulation: 54056723, birthRatePerSec: 0.022, deathRatePerSec: 0.010, baseGDP: 385000000000, gdpGrowthPerSec: 450 },
  { rank: 29, gdpRank: 45, name: "Sudan", code: "sd", flagEmoji: "🇸🇩", basePopulation: 54086035, birthRatePerSec: 0.045, deathRatePerSec: 0.012, baseGDP: 30000000000, gdpGrowthPerSec: 50 },
  { rank: 30, gdpRank: 46, name: "Uganda", code: "ug", flagEmoji: "🇺🇬", basePopulation: 53564785, birthRatePerSec: 0.052, deathRatePerSec: 0.011, baseGDP: 50000000000, gdpGrowthPerSec: 110 },
  { rank: 31, gdpRank: 13, name: "South Korea", code: "kr", flagEmoji: "🇰🇷", basePopulation: 51580305, birthRatePerSec: 0.008, deathRatePerSec: 0.012, baseGDP: 1760000000000, gdpGrowthPerSec: 1400 },
  { rank: 32, gdpRank: 34, name: "Iraq", code: "iq", flagEmoji: "🇮🇶", basePopulation: 48609924, birthRatePerSec: 0.038, deathRatePerSec: 0.008, baseGDP: 250000000000, gdpGrowthPerSec: 380 },
  { rank: 33, gdpRank: 30, name: "Algeria", code: "dz", flagEmoji: "🇩🇿", basePopulation: 48429992, birthRatePerSec: 0.030, deathRatePerSec: 0.008, baseGDP: 260000000000, gdpGrowthPerSec: 400 },
  { rank: 34, gdpRank: 14, name: "Spain", code: "es", flagEmoji: "🇪🇸", basePopulation: 47830710, birthRatePerSec: 0.011, deathRatePerSec: 0.015, baseGDP: 1650000000000, gdpGrowthPerSec: 1300 },
  { rank: 35, gdpRank: 23, name: "Argentina", code: "ar", flagEmoji: "🇦🇷", basePopulation: 46204563, birthRatePerSec: 0.020, deathRatePerSec: 0.011, baseGDP: 600000000000, gdpGrowthPerSec: 600 },
  { rank: 36, gdpRank: 47, name: "Afghanistan", code: "af", flagEmoji: "🇦🇫", basePopulation: 45649556, birthRatePerSec: 0.040, deathRatePerSec: 0.010, baseGDP: 15000000000, gdpGrowthPerSec: 20 },
  { rank: 37, gdpRank: 48, name: "Yemen", code: "ye", flagEmoji: "🇾🇪", basePopulation: 43363311, birthRatePerSec: 0.032, deathRatePerSec: 0.008, baseGDP: 21000000000, gdpGrowthPerSec: 30 },
  { rank: 38, gdpRank: 49, name: "Angola", code: "ao", flagEmoji: "🇦🇴", basePopulation: 41018495, birthRatePerSec: 0.045, deathRatePerSec: 0.010, baseGDP: 110000000000, gdpGrowthPerSec: 200 },
  { rank: 39, gdpRank: 10, name: "Canada", code: "ca", flagEmoji: "🇨🇦", basePopulation: 40728805, birthRatePerSec: 0.011, deathRatePerSec: 0.010, baseGDP: 2240000000000, gdpGrowthPerSec: 1500 },
  { rank: 40, gdpRank: 29, name: "Morocco", code: "ma", flagEmoji: "🇲🇦", basePopulation: 38723899, birthRatePerSec: 0.019, deathRatePerSec: 0.007, baseGDP: 150000000000, gdpGrowthPerSec: 250 }
];

export const WORLD_BASE_STATS = {
  worldPopulation: 8286289057,
  birthsToday: 205967,
  deathsToday: 94430,
  growthToday: 111537,
  birthsPerSecWorld: 4.35,
  deathsPerSecWorld: 1.95,
  worldGDP: 108500000000000, // Nominal World GDP in USD ($108.5 Trillion)
  gdpAddedToday: 8950000000,  // Daily global GDP output increment
  gdpGrowthPerSecWorld: 115000, // Global GDP increase per second
};
