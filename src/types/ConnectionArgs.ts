import { WhereInput } from './WhereInput';
import { OrderBy } from './OrderBy';

export type ConnectionArgs<Record extends { [key: string]: any }> = {
  first?: number | null | undefined;
  after?: string | null | undefined;
  filterBy?: WhereInput<Record> | null | undefined;
  orderBy?: OrderBy<Record>[] | null | undefined;
};
