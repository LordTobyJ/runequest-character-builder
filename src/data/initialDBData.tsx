import { AffinityModifier, Characteristic, CharacteristicModifier, Cult, FamilyHeirloom, FamilyHistory, GrandparentHistory, Homeland, HomelandCulture, HomelandRollModifier, LifeEvent, Occupation, Outcome, OwnHistory, ParentHistory, Passion, PassionModifier, RandomBoon, RandomCauseOfDeath, Affinity, RuneMagic, Skill, SkillModifier, SpiritMagic, SubOutcome } from "../components/DBHandler/index.interfaces";

export const OCCUPATIONS:Occupation[] = [

];

export const HOMELANDS:Homeland[] = [
    {
        id: 0,
        name: "Sartar",
        description: `Sartar is the default Homeland for adventurers, 
        a mountainous kingdom made up of Storm-worshiping hill
        tribes united by the royal house of Sartar. Sartar recently
        liberated itself from the Lunar Empire, and in doing so
        began the Hero Wars. It is now ruled by Kallyr Starbrow,
        and is a hotbed of magical questing, petty feuds, and
        would-be Heroes.`,
        stereotypes: `The Sartarites are quarrelsome,
        reckless, and fiercely independent. Men are emotional,
        often violently passionate, with swiftly shifting opinions
        and feelings. Women are cunning, practical, and vengeful.
        The Sartarites are devoted to Orlanth and Ernalda, and hate
        the Lunar Empire with a burning passion.`,
        cultures: ``,
        suggested_occupations: `Farmer, Noble, Priest, Warrior.`,
        common_cults: [6, 1, 2, 7, 9, 10, 11, 12, 17, 20],
        starting_passions: Passion[] | number[] | null;
        cultural_skills: Skill[] | number[] | null;
        cultural_weapons: Skill[] | number[] | null;
        },
        {
            id: 1,
            name: `Esrolia`,
            description: `This rich and civilized land is ruled by a matriarchy. Esrolia
            is the home of the Earth Mother Ernalda, and is the center
            for Earth worship. Its capital city, Nochet, is the largest city
            in Glorantha, ruled by the Queen of Esrolia.`,
            stereotypes: `The Esrolians are civilized, curious, luxurious, and sensual. Their styles set the standards in
            many lands, including Dragon Pass. They are cosmopolitan,
            with knowledge of many distant realms. They dislike war,
            and favor negotiation over open conflict. Esrolian women
            are proud, ambitious, devious, and very practical. Men are
            emotional, loyal, reckless, and quarrelsome.`,
            cultures: ``,
            suggested_occupations: `Healer, Merchant, Priest, Scribe, Thief.`,
            common_cults: [6, 0, 1, 2, 7, 10, 11, 12],
            starting_passions: ``,
            cultural_skills: ``,
            cultural_weapons: ``,
        },
        {
            id: 2,
            name: "Grazeland Pony Breeders",
            description: `The Grazelands are a region of grassy hills and valleys
            inhabited by the Grazeland Pony Breeders. This seminomadic tribe herds horses and rules over enserfed peasants
            originally from Esrolia, Sartar, and Tarsh. They are
            ruled in turn by the Feathered Horse Queen, a powerful
            Earth priestess.`,
            stereotypes: `The society of the Pony Breeders
            is rigid and patriarchal, with everyone's place determined by age and birth. 
            The tribe is divided into a dozen clans; clan
            chiefs are elected but few among the populace are eligible.
            The Pony Breeders consider themselves innately superior to
            all “groundsmen.”`,
            cultures: null,
            suggested_occupations: `Herder, Noble, Warrior.`,
            common_cults: [19, 6, 9, 10],
            starting_passions: ``,
            cultural_skills: ``,
            cultural_weapons: ``,
        },
        {
            id: 3,
            name: 'Prax',
            description: `These barbarian nomads reside in the chaparral plains east of
            Dragon Pass. Each tribe rides and herds the beast for which it
            is named: bison, bolo lizard, high llama, impala, rhinoceros,
            sable antelope, and even the horse-riding Pol-Joni. The horse
            is strictly taboo for most Praxians (except for the Pol-Joni).`,
            stereotypes: `: The Praxians are proud and warlike
            nomads, who distrust outsiders and each other. They hate
            Chaos with a passion and eschew civilized cults. They live
            harsh, cruel lives in the wastes, in a state of near-constant war,
            and consider the very environment they live in potentially
            hostile. A popular refrain among the Praxians is “Life is War.”
            `,
            cultures: ``,
            suggested_occupations: `Apprentice Shaman, Herder, Warrior (Light or Heavy Cavalry).`,
            common_cults: null,
            starting_passions: ``,
            cultural_skills: ``,
            cultural_weapons: ``,

        }
];

export const FAMILY_HISTORIES:FamilyHistory[] = [

];

export const RUNE_AFFINITIES: Affinity[] = [
    {
        id: 0,
        name: "Darkness",
        magnitude: 0,
        type: "Rune",
        inverse: null,
    },
    {
        id: 1,
        name: "Water",
        magnitude: 0,
        type: "Rune",
        inverse: null,
    },
    {
        id: 2,
        name: "Earth",
        magnitude: 0,
        type: "Rune",
        inverse: null,
    },
    {
        id: 3,
        name: "Fire/Sky",
        magnitude: 0,
        type: "Rune",
        inverse: null,
    },
    {
        id: 4,
        name: "Air",
        magnitude: 0,
        type: "Rune",
        inverse: null,
    },
    {
        id: 5,
        name: "Moon",
        magnitude: 0,
        type: "Rune",
        inverse: null,
    },
    {
        id: 6,
        name: "Harmony",
        magnitude: 50,
        type: "Form",
        inverse: "Disorder",
    },
    {
        id: 7,
        name: "Disorder",
        magnitude: 50,
        type: "Form",
        inverse: "Harmony",
    },
    {
        id: 8,
        name: "Stasis",
        magnitude: 50,
        type: "Form",
        inverse: "Movement",
    },
    {
        id: 9,
        name: "Movement",
        magnitude: 50,
        type: "Form",
        inverse: "Stasis",
    },
    {
        id: 10,
        name: "Truth",
        magnitude: 50,
        type: "Form",
        inverse: "Illusion",
    },
    {
        id: 11,
        name: "Illusion",
        magnitude: 50,
        type: "Form",
        inverse: "Truth",
    },
    {
        id: 12,
        name: "Fertility",
        magnitude: 50,
        type: "Form",
        inverse: "Death",
    },
    {
        id: 13,
        name: "Death",
        magnitude: 50,
        type: "Form",
        inverse: "Fertility",
    },
    {
        id: 14,
        name: "Man",
        magnitude: 50,
        type: "Form",
        inverse: "Beast",
    },
    {
        id: 15,
        name: "Beast",
        magnitude: 50,
        type: "Form",
        inverse: "Man",
    }
];

export const AFFINITY_MODIFIER: AffinityModifier[] = [

];

export const CHARACTERISTICS: Characteristic[] = [
    {
        id: 0,
        name: `STR`,
        magnitude: 0,
    },
    {
        id: 1,
        name: `CON`,
        magnitude: 0,
    },
    {
        id: 2,
        name: `SIZ`,
        magnitude: 0,
    },
    {
        id: 3,
        name: `DEX`,
        magnitude: 0,
    },
    {
        id: 4,
        name: `INT`,
        magnitude: 0,
    },
    {
        id: 5,
        name: `POW`,
        magnitude: 0,
    },
    {
        id: 6,
        name: `CHA`,
        magnitude: 0,
    },
];

export const CHARACTERISTIC_MODIFIERS: CharacteristicModifier[] = [

]

export const FAMILY_HEIRLOOMS: FamilyHeirloom[] = [

];

export const HOMELAND_CULTURES: HomelandCulture[] = [

];

export const CULTS: Cult[] = [
    {
        id: 0,
        name: `Argan Argar`,
        subname: `God of Surface Darkness`,
        rune_A: 0,
        rune_B: 6,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Speak Other Language (Darktongue)
        +20%, Read/Write (Darktongue) +15%, Sing +10%.`,
        favoured_passions: `Devotion (Argan Argar), Loyalty (temple).`,
        associated_cults: `Ernalda`,
    },
    {
        id: 1,
        name: `Babeester Gor`,
        subname: `The Avenging Daughter`,
        rune_A: 2,
        rune_B: 13,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `1H Axe +15%, 2H Axe
        +20%, Intimidate +10%, Speak Other Language
        (Earthtongue) +10% .`,
        favoured_passions: `Devotion (Babeester Gor), Loyalty
        (temple), Hate (Oathbreakers).`,
        associated_cults: `Ernalda, Maran Gor.`,
    },
    {
        id: 2,
        name: `Chalana Arroy`,
        subname: `Goddess of Healing`,
        rune_A: 6,
        rune_B: 12,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `First Aid +20%, Treat Disease or Treat
        Poison +15%, Sing +10%.`,
        favoured_passions: `Loyalty (temple).`,
        associated_cults: `Ernalda, Eurmal, Issaries, Lhankor
        Mhy, Orlanth, Storm Bull, Yelm.`,
    },
    {
        id: 3,
        name: `Daka Fal`,
        subname: `Ancestor Worship`,
        rune_A: 14,
        rune_B: null,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Speak Other Language (Spiritspeech)
        +20%, Spirit Combat +15%, Sing +10%.`,
        favoured_passions: `Love (Family), Loyalty (Shaman). `,
        associated_cults: `Odayla, Yinkin.`,
    },
    {
        id: 4,
        name: `Eiritha`,
        subname: `Herd Mother`,
        rune_A: 12,
        rune_B: 15,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Understand Herd Beasts +20%, Herd
        +15%, Sing +10%.`,
        favoured_passions: `Love (family), Loyalty (temple),
        Loyalty (tribe).`,
        associated_cults: `: Ernalda, Storm Bull, Waha`,
    },
    {
        id: 5,
        name: `Engizi`,
        subname: `The Sky River Titan`,
        rune_A: 1,
        rune_B: 9,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: ` Boat +20%, Speak Other Language
        (Boatspeech) +15%, Swim +10%`,
        favoured_passions: `Loyalty (temple), Devotion (river god)`,
        associated_cults: `Orlanth Thunderous.`,
    },
    {
        id: 6,
        name: `Ernalda`,
        subname: `Earth Queen`,
        rune_A: 12,
        rune_B: 2,
        rune_C: 6,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Dance +20%, Animal Lore +15%
        or Plant Lore +15%, Sing +10%, Speak Other Language
        (Earthtongue) +20%.`,
        favoured_passions: `: Devotion (Ernalda), Loyalty (temple),
        Loyalty (high priestess).`,
        associated_cults: `Argan Argar, Babeester Gor, Chalana Arroy, Eiritha, Maran Gor, Orlanth, Storm Bull,
        Yelm, Yelmalio`,
    },
    {
        id: 7,
        name: `Eurmal`,
        subname: `The Trickster`,
        rune_A: 7,
        rune_B: 11,
        rune_C: 9,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Dodge +20%, Fast Talk
        +15%, Charm +10%.`,
        favoured_passions: `Hate (Authority).`,
        associated_cults: `Chalana Arroy, Issaries, Lhankor
        Mhy, Orlanth.`,
    },
    {
        id: 8,
        name: `Foundchild`,
        subname: `Hunting God`,
        rune_A: 13,
        rune_B: 6,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Track +15%, Peaceful Cut
        +20%, Sing +10%.`,
        favoured_passions: `Love (family), Loyalty (temple).`,
        associated_cults: ` Odayla, Waha, Yinkin`,
    },
    {
        id: 9,
        name: `Humakt`,
        subname: `God of Death and War`,
        rune_A: 13,
        rune_B: 10,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `: 1H Sword (pick type) +20%, Other
        Weapon (pick type) +10%, Intimidate +15%`,
        favoured_passions: `Honor, Loyalty (temple), Devotion (Humakt).`,
        associated_cults: `None.`,
    },
    {
        id: 10,
        name: `Issaries`,
        subname: `God of Communication and Trade`,
        rune_A: 6,
        rune_B: 9,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Bargain +15%, Speak Other Language
        (Tradetalk) +20%, Sing +10%.`,
        favoured_passions: `Loyalty (temple).`,
        associated_cults: `Chalana Arroy, Eurmal, Lhankor
        Mhy, Orlanth.`,
    },
    {
        id: 11,
        name: `Lhankor Mhy`,
        subname: `Lord of Knowledge`,
        rune_A: 10,
        rune_B: null,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Read/Write (any) +20%, Lore (any)
        +15%, Sing +10%.`,
        favoured_passions: `Loyalty (temple).`,
        associated_cults: `Chalana Arroy, Eurmal,
        Issaries, Orlanth.`,
    },
    {
        id: 12,
        name: `Maran Gor`,
        subname: `The Earthshaker`,
        rune_A: 2,
        rune_B: 7,
        rune_C: 13,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `1H Axe (pick type) or Mace +20%,
        Dance +20%, Intimidate +10%, Speak Other Language
        (Earthtongue) +10%.`,
        favoured_passions: `Devotion (Maran Gor), Loyalty (temple).`,
        associated_cults: `Babeester Gor, Ernalda.`,
    },
    {
        id: 13,
        name: `Odayla`,
        subname: `Bear God`,
        rune_A: 4,
        rune_B: 15,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Track +15%, Peaceful Cut
        +20%, Sing +10%`,
        favoured_passions: `Love (family).`,
        associated_cults: `Daka Fal, Foundchild, Orlanth, Yinkin`,
    },
    {
        id: 14,
        name: `Orlanth Adventurous`,
        subname: `Storm King, God of Farmers, Warriors, and Kings`,
        rune_A: 4,
        rune_B: 9,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Orate +15%, Speak Other Language
        (Stormspeech) +20%, Sing +10%, Add +10% to any sword skill. `,
        favoured_passions: `Devotion (Orlanth), Hate (Chaos),
        Honor, Loyalty (temple).`,
        associated_cults: `: Chalana Arroy, Ernalda, Eurmal, Issaries, Lhankor Mhy, Odayla, Storm Bull, Yinkin`,
    },
    {
        id: 15,
        name: `Orlanth Thunderous`,
        subname: `Storm King, God of Farmers, Warriors, and Kings`,
        rune_A: 4,
        rune_B: 9,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Orate +15%, Speak Other Language
        (Stormspeech) +20%, Sing +10%, Add +10% to Dance.`,
        favoured_passions: `Devotion (Orlanth), Hate (Chaos),
        Honor, Loyalty (temple).`,
        associated_cults: `: Chalana Arroy, Ernalda, Eurmal, Issaries, Lhankor Mhy, Odayla, Storm Bull, Yinkin`,
    },
    {
        id: 16,
        name: `Seven Mothers`,
        subname: `Recreators of the Red Goddess`,
        rune_A: 13,
        rune_B: 5,
        rune_C: 12,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: ` Speak Other Language (New Pelorian)
        +20%, Read/Write (New Pelorian) +15%, Sing +10%.`,
        favoured_passions: `Loyalty (temple), Loyalty
        (Red Emperor).`,
        associated_cults: `Red Goddess`,
    },
    {
        id: 17,
        name: `Storm Bull`,
        subname: `The Chaos Killer`,
        rune_A: 4,
        rune_B: 13,
        rune_C: 15,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Cultural Weapon (pick type) +15%,
        Sense Chaos +20%, Intimidate +10%.`,
        favoured_passions: `Devotion (Storm Bull), Hate (Chaos),
        Loyalty (Storm Khan).`,
        associated_cults: `Chalana Arroy, Eiritha, Ernalda,
        Orlanth, Waha.`,
    },
    {
        id: 18,
        name: `Waha`,
        subname: `The Butcher`,
        rune_A: 14,
        rune_B: 13,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Peaceful Cut +20%, Spirit Combat
        +15%, Sing +10%.`,
        favoured_passions: `Devotion (Waha), Loyalty (khan).`,
        associated_cults: `Eiritha, Storm Bull.`,
    },
    {
        id: 19,
        name: `Yelm`,
        subname: `The Sun Horse`,
        rune_A: 12,
        rune_B: 3,
        rune_C: 13,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Ride +20%, Speak Other Language
        (Firespeech) +20%, Sing +10%`,
        favoured_passions: `Honor, Love (Family), Loyalty
        (temple), Devotion (Yelm).`,
        associated_cults: `Chalana Arroy, Ernalda, Yelmalio`,
    },
    {
        id: 20,
        name: `Yelmalio`,
        subname: `Sun God of the Frontier`,
        rune_A: 3,
        rune_B: 10,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: ` Celestial Lore +15%, Speak Other
        Language (Firespeech) +20%, Sing +10%.`,
        favoured_passions: `Honor, Loyalty (temple), Devotion (Yelmalio)`,
        associated_cults: `Ernalda, Yelm.`,
    },
    {
        id: 21,
        name: `Yinkin`,
        subname: `Shadowcat God`,
        rune_A: 4,
        rune_B: 15,
        rune_C: null,
        special_rune_magic: null,
        cult_spirit_magic: null,
        prohibited_spirit_magic: null,
        cult_skills: `Speak Other Language (Beastspeech)
        +15%, Track +20%.`,
        favoured_passions: `Love (family), Loyalty (tribe)`,
        associated_cults: `Daka Fal, Foundchild, Odayla, Orlanth`,
    }
];

export const RUNE_MAGIC: RuneMagic[] = [


];

export const SPIRIT_MAGIC: SpiritMagic[] = [

];

export const PASSIONS: Passion[] = [

];

export const SKILLS: Skill[] = [

];

export const SKILL_MODIFIERS: SkillModifier[] = [

];

export const RANDOM_CAUSES_OF_DEATH: RandomCauseOfDeath[] = [

];

export const RANDOM_BOONS: RandomBoon[] = [

];

export const GRANDPARENT_HISTORIES: GrandparentHistory[] = [

];

export const PARENT_HISTORIES: ParentHistory[] = [

];

export const OWN_HISTORIES: OwnHistory[] = [

];

export const LIFE_EVENTS: LifeEvent[] = [

];

export const OUTCOMES: Outcome[] = [

];

export const HOMELAND_ROLL_MODIFIERS: HomelandRollModifier[] = [

];

export const SUBOUTCOMES: SubOutcome[] = [

];

export const PASSION_MODIFIERS: PassionModifier[] = [

];





