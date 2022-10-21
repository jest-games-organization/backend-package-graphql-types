import { OrderByDirection } from './OrderByDirection';

export type OrderBy<Record extends { [key: string]: unknown }> = {
  [key in keyof Record]?: OrderByDirection | null | undefined;
};
