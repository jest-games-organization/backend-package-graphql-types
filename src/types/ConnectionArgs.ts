import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { OrderByInput } from './OrderByInput';
import { WhereInput } from './WhereInput';

export type ConnectionArgs<Record extends DataObject> = {
  first?: number | null | undefined;
  after?: string | null | undefined;
  filterBy?: WhereInput<Record> | null | undefined;
  orderBy?: OrderByInput<Record>[] | null | undefined;
};
