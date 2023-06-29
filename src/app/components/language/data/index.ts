export type TLanguage = {
  id: number;
  label: string;
  key: string;
};

export const dataLanguage: TLanguage[] = [
  { id: 0, label: 'VN', key: 'vi' },
  { id: 1, label: 'EN', key: 'en' },
];

export type TDataLanguage = typeof dataLanguage;
