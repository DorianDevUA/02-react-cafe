export const VoteType = {
  Good: 'good',
  Neutral: 'neutral',
  Bad: 'bad',
} as const;

// export type VoteType = (typeof VoteType)[keyof typeof VoteType];
export type VoteType = 'good' | 'neutral' | 'bad';

// export type Votes = {
//   [Key in VoteType]: number;
// };

// Використання саме interface згідно умови ДЗ
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}
