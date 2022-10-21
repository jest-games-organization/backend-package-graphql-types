export type FilterBy<Record extends { [key: string]: unknown }> = {
  [key in keyof Record]?: any;
} & {
  AND?: FilterBy<Record>[] | null | undefined;
  OR?: FilterBy<Record>[] | null | undefined;
  NOT?: FilterBy<Record>[] | null | undefined;
};
