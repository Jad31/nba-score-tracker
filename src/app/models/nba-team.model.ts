export type Conference = 'East' | 'West';
export type Division =
  | 'Atlantic'
  | 'Central'
  | 'Southeast'
  | 'Northwest'
  | 'Pacific'
  | 'Southwest';
export interface NbaTeam {
  id: number;
  abbreviation: string;
  city: string;
  conference: Conference;
  division: Division;
  full_name: string;
  name: string;
}
