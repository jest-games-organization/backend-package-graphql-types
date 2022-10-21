import { OrderBy } from './OrderBy';

export type DecodedCursor<Record extends { [key: string]: unknown }> = {
  data: { [key in keyof Record]: Record[key] };
  args: { orderBy: OrderBy<Record>[] };
};
