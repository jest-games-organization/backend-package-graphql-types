import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { OrderBy } from './OrderBy';

export type DecodedCursor<Record extends DataObject> = {
  data: { [key in keyof Record]: Record[key] };
  args: { orderBy: OrderBy<Record>[] };
};
