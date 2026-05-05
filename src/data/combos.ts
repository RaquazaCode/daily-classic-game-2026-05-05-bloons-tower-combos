import type { TowerComboId, TowerTypeId } from "../types";

export interface TowerComboDefinition {
  id: TowerComboId;
  name: string;
  description: string;
  color: string;
  towerTypes: [TowerTypeId, TowerTypeId];
  linkRadius: number;
  fireRateMultiplier: number;
  rewardBonus: number;
  extraDamageVsSlowed?: number;
  slowBonusMs?: number;
}

export const COMBO_DEFINITIONS: Record<TowerComboId, TowerComboDefinition> = {
  crossfire_link: {
    id: "crossfire_link",
    name: "Crossfire Link",
    description: "Dart Monkey + Tack Sprayer fire faster and cash in bonus pop rewards.",
    color: "#ffd36e",
    towerTypes: ["dart_monkey", "tack_sprayer"],
    linkRadius: 124,
    fireRateMultiplier: 0.8,
    rewardBonus: 2,
  },
  shatter_lane: {
    id: "shatter_lane",
    name: "Shatter Lane",
    description: "Ice Tower + Sniper turn slowed bloons into high-value shatter targets.",
    color: "#9fe8ff",
    towerTypes: ["ice_tower", "sniper"],
    linkRadius: 156,
    fireRateMultiplier: 0.9,
    rewardBonus: 3,
    extraDamageVsSlowed: 2,
    slowBonusMs: 700,
  },
};

export const COMBO_ORDER: TowerComboId[] = ["crossfire_link", "shatter_lane"];

export function getComboDefinitionForPair(a: TowerTypeId, b: TowerTypeId): TowerComboDefinition | null {
  for (const comboId of COMBO_ORDER) {
    const definition = COMBO_DEFINITIONS[comboId];
    const [left, right] = definition.towerTypes;
    if ((left === a && right === b) || (left === b && right === a)) {
      return definition;
    }
  }
  return null;
}
