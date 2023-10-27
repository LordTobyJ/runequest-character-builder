export interface Character {
    id: number;
    occupation: Occupation | number | null;
    homeland: Homeland | number | null;
    family_history: FamilyHistory | number | null;
    affinity_60: Affinity | number | null;
    affinity_40: Affinity | number | null;
    affinity_20: Affinity | number | null;
    affinity_distribution_50: AffinityModifier | number | null;
    form_75A: Affinity | number | null;
    form_75B: Affinity | number | null;
    stat_STR: Characteristic | number | null;
    stat_CON: Characteristic | number | null;
    stat_SIZ: Characteristic | number | null;
    stat_DEX: Characteristic | number | null;
    stat_INT: Characteristic | number | null;
    stat_POW: Characteristic | number | null;
    stat_CHA: Characteristic | number | null;
    rune_char_mod_A: CharacteristicModifier | number | null;
    rune_char_mod_B: CharacteristicModifier | number | null;
    skill_distribution_25: SkillModifier[] | number[] | null;
    skill_distribution_10: SkillModifier[] | number[] | null;
    family_heirloom: FamilyHeirloom | number | null;
    name: string;
    is_woman: boolean;
    is_lefthanded: boolean;
}

export interface Occupation {
    id: number;
    name: string;
    occupational_skills: Skill[] | number | null;
    available_cults: Cult[] | number | null;
    allowed_homelands: Homeland[] | number | null;
    standard_of_living: string;
    base_income: string;
    favoured_passions: string;
    equipment: string;
    ransom: string;
}

export interface Homeland {
    id: number;
    name: string;
    description: string;
    stereotypes: string;
    cultures: HomelandCulture[] | number[] | null;
    suggested_occupations: string;
    common_cults: Cult[] | number[] | null;
    starting_passions: Passion[] | number[] | null;
    cultural_skills: Skill[] | number[] | null;
    cultural_weapons: Skill[] | number[] | null;
}

export interface FamilyHistory {
    id: number;
    Grandparent: GrandparentHistory | number | null;
    Parent: ParentHistory | number | null;
    Own: OwnHistory | number | null;
}

export interface Affinity {
    id: number;
    type: string;
    name: string;
    magnitude: number;
    inverse: string | null;
}

export interface AffinityModifier {
    id: number;
    character: Character | number | null;
    rune_affinity: Affinity | number | null;
    form_affinity: Affinity | number | null;
    modifier: number;
}

export interface Characteristic {
    id: number;
    name: string;
    magnitude: number;
}

export interface CharacteristicModifier {
    id: number;
    character: Character | number | null;
    characteristic: Characteristic | number | null;
    modifier: number;
}

export interface FamilyHeirloom {
    id: number;
    character: Character | number | null;
    roll_result: string;
    skill_modifier: Skill[] | number[] | null;
    passion_modifier: Skill[] | number[] | null;
}

export interface HomelandCulture {
    id: number;
    name: string;
    local_modifiers: Skill[] | number[] | null;
    common_cults: Cult[] | number[] | null;
}

export interface Cult {
    id: number;
    name: string;
    subname: string;
    rune_A: Affinity | number;
    rune_B: Affinity | number | null;
    rune_C: Affinity | number | null;
    special_rune_magic: RuneMagic[] | number[] | null;
    cult_spirit_magic: SpiritMagic[] | number[] | null;
    prohibited_spirit_magic: SpiritMagic[] | number[] | null;
    cult_skills: SkillModifier[] | number[] | null;
    favoured_passions: string;
    associated_cults: string;
    
}

// TODO: Populate
export interface RuneMagic {
    id: number;
    name: string;
}

// TODO: Populate
export interface SpiritMagic {
    id: number;
    name: string;
}

export interface Passion {
    id: number;
    name: string;
    passion_specialisation: string;
    magnitude: number;
}


export interface Skill {
    id: number;
    name: string;
    category: string;
    name_specialisation: string | null;
    magnitude: number;
}


export interface SkillModifier {
    id: number;
    modifier: number;
    skill: Skill | number | null;
}

export interface RandomCauseOfDeath {
    id: number;
    name: string;
    roll_result: string;
}

export interface RandomBoon {
    id: number;
    name: string;
    roll_result: string;
}

export interface GrandparentHistory {
    id: number;
    character: Character | number | null;
    event_1582: LifeEvent | number | null;
    event_1597: LifeEvent | number | null;
    event_1602: LifeEvent | number | null;
    event_interrim: LifeEvent | number | null;
    event_1605: LifeEvent | number | null;
    name: string;
}

export interface ParentHistory {
    id: number;
    character: Character | number | null;
    event_1608: LifeEvent | number | null;
    event_1610: LifeEvent | number | null;
    event_1613: LifeEvent | number | null;
    event_1615: LifeEvent | number | null;
    event_1616: LifeEvent | number | null;
    event_1618: LifeEvent | number | null;
    event_1619: LifeEvent | number | null;
    event_1620: LifeEvent | number | null;
    name: string;
}

export interface OwnHistory {
    id: number;
    character: Character | number | null;
    event_1622: LifeEvent | number | null;
    event_1623: LifeEvent | number | null;
    event_1624: LifeEvent | number | null;
    event_1625: LifeEvent | number | null;
    name: string;
    
}

export interface LifeEvent {
    id: number;
    participating_homelands: Homeland[] | number | null;
    name: string;
    outcomes: Outcome[] | number[] | null;
    homeland_roll_modifier: HomelandRollModifier[] | number[] | null;
}

export interface Outcome {
    id: number;
    name: string;
    character: Character | GrandparentHistory | ParentHistory | number | null;
    outcome_skill_modification: SkillModifier | number | null;
    died: boolean;
    outcome_random_cause_death: RandomCauseOfDeath | number | null;
    outcome_random_boon: RandomBoon | number | null;
    sub_outcome: SubOutcome | number | null;
    outcome_passion_modification: PassionModifier[] | number[] | null;
}

export interface HomelandRollModifier {
    id: number;
    character: Character | number | null;
    name: string;
    modifier: number;
}

export interface SubOutcome {
    id: number;
    character: Character | GrandparentHistory | ParentHistory | number | null;
    name: string;
    died: boolean;
    suboutcome_random_boon: RandomBoon | null;
    suboutcome_random_cause_death: RandomCauseOfDeath | null;
    suboutcome_skill_modifier: SkillModifier | null;
    suboutcome_passion_modifier: PassionModifier | null;
}

export interface PassionModifier {
    id: number;
    passion: Passion | number | null;
    modifier: number;
}
