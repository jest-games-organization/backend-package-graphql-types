import { OrderByDirection } from './OrderByDirection';

export type OrderBy<Record extends { [key: string]: any }> = {
  [key in keyof Record]?: OrderByDirection | null | undefined;
};
