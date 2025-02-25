export const SortOrder = {
    asc: "asc",
    desc: "desc"
} as const;

export type SortOrderType = typeof SortOrder[keyof typeof SortOrder];

export interface ResultSetOptions {
    sort: SortOrderType;
    limit: number;
}