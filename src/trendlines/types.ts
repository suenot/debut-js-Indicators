export type LineId = string;
export type ExtremumsItem = { idx: number; value: number };
export enum LineEvent {
    'BREAKDOWN',
    'SMOOTH',
    'BOUNCE',
}