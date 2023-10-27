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
            starting_passions: ``,
            cultural_skills: ``,
            cultural_weapons: ``,
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
            cultural_weapons: ``,        }
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
        cult_skills: [0, 1, 2],
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
        cult_skills: [3, 4, 5, 6],
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
        cult_skills: [7, 8, 9, 10],
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
        cult_skills: [11, 12, 13],
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
        cult_skills:[14, 15, 16],
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
        cult_skills: [17, 18, 19],
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
        cult_skills: [20, 21, 22, 23],
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
        cult_skills: [24, 25, 26],
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
        cult_skills: [27, 28, 29],
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
        cult_skills: [30, 31, 32],
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
        cult_skills: [33, 34, 35],
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
        cult_skills: [36, 37, 38],
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
        cult_skills: [39, 40, 41, 42, 43],
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
        cult_skills: [44, 45, 46],
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
        cult_skills: [47, 48, 49, 50],
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
        cult_skills: [51, 52, 53, 54],
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
        cult_skills: [55, 56, 57],
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
        cult_skills: [58, 59, 60],
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
        cult_skills: [61, 62, 63],
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
        cult_skills: [64, 65, 66],
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
        cult_skills: [67, 68, 69],
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
        cult_skills: [70, 71],
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
    {
        id: 0,
        name: "Boat",
        category: "Agility",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 1,
        name: "Climb",
        category: "Agility",
        name_specialisation: null,
        magnitude: 40,
      },      {
        id: 2,
        name: "Dodge",
        category: "Agility",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 3,
        name: "Drive Chariot",
        category: "Agility",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 4,
        name: "Jump",
        category: "Agility",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 5,
        name: "Ride",
        category: "Agility",
        name_specialisation: "any",
        magnitude: 5,
      },      {
        id: 6,
        name: "Swim",
        category: "Agility",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 7,
        name: "Act",
        category: "Communication",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 8,
        name: "Art",
        category: "Communication",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 9,
        name: "Bargain",
        category: "Communication",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 10,
        name: "Charm",
        category: "Communication",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 11,
        name: "Dance",
        category: "Communication",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 12,
        name: "Disguise",
        category: "Communication",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 13,
        name: "Fast Talk",
        category: "Communication",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 14,
        name: "Intimidate",
        category: "Communication",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 15,
        name: "Intrigue",
        category: "Communication",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 16,
        name: "Orate",
        category: "Communication",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 17,
        name: "Sing",
        category: "Communication",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 18,
        name: "Speak Own Language",
        category: "Communication",
        name_specialisation: null,
        magnitude: 50,
      },      {
        id: 19,
        name: "Speak Other Language",
        category: "Communication",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 20,
        name: "Alchemy",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 21,
        name: "Animal Lore",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 22,
        name: "Battle",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 23,
        name: "Bureaucracy",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 24,
        name: "Celestial Lore",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 25,
        name: "Cult Lore",
        category: "Knowledge",
        name_specialisation: "",
        magnitude: 5,
      },      {
        id: 26,
        name: "Customs",
        category: "Knowledge",
        name_specialisation: "local",
        magnitude: 25,
      },
      
      {
        id: 26,
        name: "Customs",
        category: "Knowledge",
        name_specialisation: "other",
        magnitude: 0,
      },      {
        id: 27,
        name: "Elder Race Lore",
        category: "Knowledge",
        name_specialisation: "race) ",
        magnitude: 5,
      },      {
        id: 28,
        name: "Evaluate",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 29,
        name: "Farm",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 30,
        name: "First Aid",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 31,
        name: "Game",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 32,
        name: "Herd",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 33,
        name: "Homeland Lore",
        category: "Knowledge",
        name_specialisation: "local) ",
        magnitude: 30,
      },      {
        id: 34,
        name: "Homeland Lore",
        category: "Knowledge",
        name_specialisation: "other) ",
        magnitude: 0,
      },      {
        id: 35,
        name: "Library Use",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 36,
        name: "Manage Household",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 37,
        name: "Mineral Lore",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 38,
        name: "Peaceful Cut",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 39,
        name: "Plant Lore",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 40,
        name: "Read/Write",
        category: "Knowledge",
        name_specialisation: "any",
        magnitude: 0,
      },      {
        id: 41,
        name: "Shiphandling",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 42,
        name: "Survival",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 43,
        name: "Treat Disease",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 44,
        name: "Treat Poison",
        category: "Knowledge",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 45,
        name: "Meditate",
        category: "Magic",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 46,
        name: "Prepare Corpse",
        category: "Magic",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 47,
        name: "Sense Assassin",
        category: "Magic",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 48,
        name: "Sense Chaos",
        category: "Magic",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 49,
        name: "Spirit Combat",
        category: "Magic",
        name_specialisation: null,
        magnitude: 20,
      },      {
        id: 50,
        name: "Spirit Dance",
        category: "Magic",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 51,
        name: "Spirit Lore",
        category: "Magic",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 52,
        name: "Spirit Travel",
        category: "Magic",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 53,
        name: "Understand Herd Beast",
        category: "Magic",
        name_specialisation: null,
        magnitude: 0,
      },      {
        id: 54,
        name: "Worship",
        category: "Magic",
        name_specialisation: "",
        magnitude: 5,
      },      {
        id: 55,
        name: "Conceal",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 56,
        name: "Craft",
        category: "Manipulation",
        name_specialisation: "(specific craft)",
        magnitude: 10,
      },      {
        id: 57,
        name: "Devise",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 58,
        name: "Play Instrument",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 59,
        name: "Sleight",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },
      {
        id: 60,
        name: "Insight",
        category: "Perception",
        name_specialisation: "own species",
        magnitude: 20,
      },
      {
        id: 60,
        name: "Insight",
        category: "Perception",
        name_specialisation: "other",
        magnitude: 0,
      },      {
        id: 61,
        name: "Listen",
        category: "Perception",
        name_specialisation: null,
        magnitude: 25,
      },      {
        id: 62,
        name: "Scan",
        category: "Perception",
        name_specialisation: null,
        magnitude: 25,
      },      {
        id: 63,
        name: "Search",
        category: "Perception",
        name_specialisation: null,
        magnitude: 25,
      },      {
        id: 64,
        name: "Track",
        category: "Perception",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 65,
        name: "Hide",
        category: "Stealth",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 66,
        name: "Move Quietly",
        category: "Stealth",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 67,
        name: "1H Axe",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 68,
        name: "2H Axe",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 69,
        name: "Broadsword",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 70,
        name: "Dagger",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 71,
        name: "1H Hammer",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 72,
        name: "2H Hammer",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 73,
        name: "Kopis",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 74,
        name: "1H Mace",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 75,
        name: "2H Mace",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 76,
        name: "Pike",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 77,
        name: "Quarterstaff",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 78,
        name: "Rapier",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 79,
        name: "Shortsword",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 80,
        name: "1H Spear",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 81,
        name: "2H Spear",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 82,
        name: "Fist",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 25,
      },      {
        id: 83,
        name: "Grapple",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 25,
      },      {
        id: 84,
        name: "Kick",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 85,
        name: "Arbalest",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 86,
        name: "Axe, Throwing",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 87,
        name: "Composite Bow",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 88,
        name: "Crossbow, All Types",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 25,
      },      {
        id: 89,
        name: "Dagger, Throwing",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 90,
        name: "Elf Bow",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 91,
        name: "Javelin",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },      {
        id: 92,
        name: "Pole Lasso",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 93,
        name: "Rock",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },      {
        id: 94,
        name: "Self Bow",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 95,
        name: "Sling",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 5,
      },      {
        id: 96,
        name: "Staff Sling",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 10,
      },
      {
        id: 97,
        name: "Large Shield",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },
      {
        id: 98,
        name: "Medium Shield",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },
      {
        id: 99,
        name: "Small Shield",
        category: "Manipulation",
        name_specialisation: null,
        magnitude: 15,
      },
      {
        id: 100,
        name: "Lore",
        category: "Knowledge",
        name_specialisation: "needs review",
        magnitude: 0,
      },
      {
          id: 101,
          name: "Cultural Weapon",
          category: "Manipulation",
          name_specialisation: "needs review",
          magnitude: 0,
      },
      {
          id: 102,
          name: "Understand Herd Beasts",
          category: "Perception",
          name_specialisation: null,
          magnitude: 0,
      },
      {
          id: 103,
          name: "1H Sword",
          category: "Manipulation",
          name_specialisation: null,
          magnitude: 10,
      },
      {
          id: 104,
          name: "Other Weapon",
          category: "Manipulation",
          name_specialisation: null,
          magnitude: 10,
      }

];

export const SKILL_MODIFIERS: SkillModifier[] = [
    {
        id: 0,
        modifier: 20,
        skill: 19,
     },
     {
        id: 1,
        modifier: 15,
        skill: 40,
     },
     {
        id: 2,
        modifier: 10,
        skill: 17,
     },
     {
        id: 3,
        modifier: 15,
        skill: 67,
     },
     {
        id: 4,
        modifier: 20,
        skill: 68,
     },
     {
        id: 5,
        modifier: 10,
        skill: 14,
     },
     {
        id: 6,
        modifier: 10,
        skill: 19,
     },
     {
        id: 7,
        modifier: 20,
        skill: 30,
     },
     {
        id: 8,
        modifier: 15,
        skill: 43,
     },
     {
        id: 9,
        modifier: 15,
        skill: 44,
     },
     {
        id: 10,
        modifier: 10,
        skill: 17,
     },
     {
        id: 11,
        modifier: 20,
        skill: 19,
     },
     {
        id: 12,
        modifier: 15,
        skill: 49,
     },
     {
        id: 13,
        modifier: 10,
        skill: 17,
     },
     {
        id: 14,
        modifier: 20,
        skill: 102,
     },
     {
        id: 15,
        modifier: 15,
        skill: 32,
     },
     {
        id: 16,
        modifier: 10,
        skill: 17,
     },
     {
        id: 17,
        modifier: 20,
        skill: 0,
     },
     {
        id: 18,
        modifier: 15,
        skill: 19,
     },
     {
        id: 19,
        modifier: 10,
        skill: 6,
     },
     {
        id: 20,
        modifier: 20,
        skill: 11,
     },
     {
        id: 21,
        modifier: 15,
        skill: 21,
     },
     {
        id: 22,
        modifier: 10,
        skill: 17,
     },
     {
        id: 23,
        modifier: 20,
        skill: 19,
     },
     {
        id: 24,
        modifier: 20,
        skill: 2,
     },
     {
        id: 25,
        modifier: 15,
        skill: 13,
     },
     {
        id: 26,
        modifier: 10,
        skill: 10,
     },
     {
        id: 27,
        modifier: 15,
        skill: 64,
     },
     {
        id: 28,
        modifier: 20,
        skill: 38,
     },
     {
        id: 29,
        modifier: 10,
        skill: 17,
     },
     {
        id: 30,
        modifier: 20,
        skill: 103,
     },
     {
        id: 31,
        modifier: 10,
        skill: 104,
     },
     {
        id: 32,
        modifier: 15,
        skill: 14,
     },
     {
        id: 33,
        modifier: 15,
        skill: 9,
     },
     {
        id: 34,
        modifier: 20,
        skill: 19,
     },
     {
        id: 35,
        modifier: 10,
        skill: 17,
     },
     {
        id: 36,
        modifier: 20,
        skill: 40,
     },
     {
        id: 37,
        modifier: 15,
        skill: 100,
     },
     {
        id: 38,
        modifier: 10,
        skill: 17,
     },
     {
        id: 39,
        modifier: 20,
        skill: 67,
     },
     {
        id: 40,
        modifier: 20,
        skill: 74,
     },
     {
        id: 41,
        modifier: 20,
        skill: 11,
     },
     {
        id: 42,
        modifier: 10,
        skill: 14,
     },
     {
        id: 43,
        modifier: 10,
        skill: 19,
     },
     {
        id: 44,
        modifier: 15,
        skill: 64,
     },
     {
        id: 45,
        modifier: 20,
        skill: 38,
     },
     {
        id: 46,
        modifier: 10,
        skill: 17,
     },
     {
        id: 47,
        modifier: 15,
        skill: 16,
     },
     {
        id: 48,
        modifier: 20,
        skill: 19,
     },
     {
        id: 49,
        modifier: 10,
        skill: 17,
     },
     {
        id: 50,
        modifier: 10,
        skill: 103,
     },
     {
        id: 51,
        modifier: 15,
        skill: 16,
     },
     {
        id: 52,
        modifier: 20,
        skill: 19,
     },
     {
        id: 53,
        modifier: 10,
        skill: 17,
     },
     {
        id: 54,
        modifier: 10,
        skill: 11,
     },
     {
        id: 55,
        modifier: 20,
        skill: 19,
     },
     {
        id: 56,
        modifier: 15,
        skill: 40,
     },
     {
        id: 57,
        modifier: 10,
        skill: 17,
     },
     {
        id: 58,
        modifier: 15,
        skill: 101,
     },
     {
        id: 59,
        modifier: 20,
        skill: 48,
     },
     {
        id: 60,
        modifier: 10,
        skill: 14,
     },
     {
        id: 61,
        modifier: 20,
        skill: 38,
     },
     {
        id: 62,
        modifier: 15,
        skill: 49,
     },
     {
        id: 63,
        modifier: 10,
        skill: 17,
     },
     {
        id: 64,
        modifier: 20,
        skill: 5,
     },
     {
        id: 65,
        modifier: 20,
        skill: 19,
     },
     {
        id: 66,
        modifier: 10,
        skill: 17,
     },
     {
        id: 67,
        modifier: 15,
        skill: 24,
     },
     {
        id: 68,
        modifier: 20,
        skill: 19,
     },
     {
        id: 69,
        modifier: 10,
        skill: 17,
     },
     {
        id: 70,
        modifier: 15,
        skill: 19,
     },
     {
        id: 71,
        modifier: 20,
        skill: 64,
     }
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





