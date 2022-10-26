export type WhereInput<Record extends { [key: string]: any }> = {
  [key in keyof Record]?: any;
} & {
  AND?: WhereInput<Record>[] | null | undefined;
  OR?: WhereInput<Record>[] | null | undefined;
  NOT?: WhereInput<Record>[] | null | undefined;
};
