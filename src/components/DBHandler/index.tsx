import Dexie from 'dexie';
import { 
    Character, 
    Occupation, 
    Homeland, 
    FamilyHistory, 
    RuneAffinity, 
    FormAffinity, 
    AffinityModifier, 
    Characteristic, 
    CharacteristicModifier, 
    FamilyHeirloom, 
    HomelandCulture, 
    Cult, 
    RuneMagic, 
    SpiritMagic, 
    Passion, 
    Skill, 
    SkillModifier, 
    RandomCauseOfDeath, 
    RandomBoon, 
    GrandparentHistory, 
    ParentHistory, 
    OwnHistory, 
    LifeEvent, 
    Outcome, 
    HomelandRollModifier, 
    SubOutcome, 
    PassionModifier 
  } from './index.interfaces';
import { AFFINITY_MODIFIER, CHARACTERISTICS, CHARACTERISTIC_MODIFIERS, CULTS, FAMILY_HISTORIES, FAMILY_HEIRLOOMS, FORM_AFFINITIES, HOMELANDS, HOMELAND_CULTURES, OCCUPATIONS, RUNE_AFFINITIES, RUNE_MAGIC, SPIRIT_MAGIC, RANDOM_BOONS, GRANDPARENT_HISTORIES, HOMELAND_ROLL_MODIFIERS, LIFE_EVENTS, OUTCOMES, OWN_HISTORIES, PARENT_HISTORIES, PASSIONS, PASSION_MODIFIERS, RANDOM_CAUSES_OF_DEATH, SKILLS, SKILL_MODIFIERS, SUBOUTCOMES } from '../../data/initialDBData';

class CharacterDB extends Dexie {
  characters!: Dexie.Table<Character, string>;
  occupations!: Dexie.Table<Occupation, string>;
  homelands!: Dexie.Table<Homeland, string>;
  familyHistories!: Dexie.Table<FamilyHistory, string>;
  runeAffinities!: Dexie.Table<RuneAffinity, string>;
  formAffinities!: Dexie.Table<FormAffinity, string>;
  affinityModifiers!: Dexie.Table<AffinityModifier, string>;
  characteristics!: Dexie.Table<Characteristic, string>;
  characteristicModifiers!: Dexie.Table<CharacteristicModifier, string>;
  familyHeirlooms!: Dexie.Table<FamilyHeirloom, string>;
  homelandCultures!: Dexie.Table<HomelandCulture, string>;
  cults!: Dexie.Table<Cult, string>;
  runeMagics!: Dexie.Table<RuneMagic, string>;
  spiritMagics!: Dexie.Table<SpiritMagic, string>;
  passions!: Dexie.Table<Passion, string>;
  skills!: Dexie.Table<Skill, string>;
  skillModifiers!: Dexie.Table<SkillModifier, string>;
  randomCausesOfDeath!: Dexie.Table<RandomCauseOfDeath, string>;
  randomBoons!: Dexie.Table<RandomBoon, string>;
  grandparentHistories!: Dexie.Table<GrandparentHistory, string>;
  parentHistories!: Dexie.Table<ParentHistory, string>;
  ownHistories!: Dexie.Table<OwnHistory, string>;
  lifeEvents!: Dexie.Table<LifeEvent, string>;
  outcomes!: Dexie.Table<Outcome, string>;
  homelandRollModifiers!: Dexie.Table<HomelandRollModifier, string>;
  subOutcomes!: Dexie.Table<SubOutcome, string>;
  passionModifiers!: Dexie.Table<PassionModifier, string>;

  constructor() {
    super('CharacterDB');
    
    // Define the schemas for each table
    this.version(1).stores({
      characters: 'id',
      occupations: 'id',
      homelands: 'id',
      family_histories: 'id',
      rune_affinities: 'id',
      form_affinities: 'id',
      affinity_nodifiers: 'id',
      characteristics: 'id',
      characteristic_modifiers: 'id',
      family_heirlooms: 'id',
      homeland_cultures: 'id',
      cults: 'id',
      rune_magic: 'id',
      spirit_magic: 'id',
      passions: 'id',
      skills: 'id',
      skill_modifiers: 'id',
      random_causes_of_death: 'id',
      random_boons: 'id',
      grandparent_histories: 'id',
      parent_histories: 'id',
      own_histories: 'id',
      life_events: 'id',
      outcomes: 'id',
      homeland_roll_modifiers: 'id',
      sub_outcomes: 'id',
      passion_modifiers: 'id',
    });
  }
}

export const DB = new CharacterDB();

const createDBRecords = () => {
  DB.occupations.bulkAdd(OCCUPATIONS);
  DB.homelands.bulkAdd(HOMELANDS);
  DB.familyHistories.bulkAdd(FAMILY_HISTORIES);
  DB.runeAffinities.bulkAdd(RUNE_AFFINITIES);
  DB.formAffinities.bulkAdd(FORM_AFFINITIES);
  DB.affinityModifiers.bulkAdd(AFFINITY_MODIFIER);
  DB.characteristics.bulkAdd(CHARACTERISTICS);
  DB.characteristicModifiers.bulkAdd(CHARACTERISTIC_MODIFIERS);
  DB.familyHeirlooms.bulkAdd(FAMILY_HEIRLOOMS);
  DB.homelandCultures.bulkAdd(HOMELAND_CULTURES);
  DB.cults.bulkAdd(CULTS);
  DB.runeMagics.bulkAdd(RUNE_MAGIC);
  DB.spiritMagics.bulkAdd(SPIRIT_MAGIC);
  DB.passions.bulkAdd(PASSIONS);
  DB.skills.bulkAdd(SKILLS);
  DB.skillModifiers.bulkAdd(SKILL_MODIFIERS);
  DB.randomCausesOfDeath.bulkAdd(RANDOM_CAUSES_OF_DEATH);
  DB.randomBoons.bulkAdd(RANDOM_BOONS);
  DB.grandparentHistories.bulkAdd(GRANDPARENT_HISTORIES);
  DB.parentHistories.bulkAdd(PARENT_HISTORIES);
  DB.ownHistories.bulkAdd(OWN_HISTORIES);
  DB.lifeEvents.bulkAdd(LIFE_EVENTS);
  DB.outcomes.bulkAdd(OUTCOMES);
  DB.homelandRollModifiers.bulkAdd(HOMELAND_ROLL_MODIFIERS);
  DB.subOutcomes.bulkAdd(SUBOUTCOMES);
  DB.passionModifiers.bulkAdd(PASSION_MODIFIERS);
};

export const getRecordByID = async (table: string, id: number) => {
  try {
    const selectedTable = DB.table(table); // Access the specified table

    // Query the table by id
    const record = await selectedTable.where({ id: id }).first();

    if (record) {
      return record;
    } else {
      throw new Error(`Record with id ${id} not found in ${table}`);
    }
  } catch (error: any) {
    console.error(`Error retrieving record from ${table}: ${error.message}`);
    createDBRecords();
  }
};

