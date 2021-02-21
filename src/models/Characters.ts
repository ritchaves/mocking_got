export type Gender = 'Female' | 'Male';

export const Gender = {
  FEMALE: 'Female' as Gender,
  MALE: 'Male' as Gender,
};

export interface Characters {
  id: string;
  name: string;
  gender: Gender;
  culture: string[];
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
}
