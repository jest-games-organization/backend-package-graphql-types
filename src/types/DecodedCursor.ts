import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { OrderByInput } from './OrderByInput';

export type DecodedCursor<Record extends DataObject> = {
  data: { [key in keyof Record]: Record[key] };
  args: { orderBy: OrderByInput<Record>[] };
};
