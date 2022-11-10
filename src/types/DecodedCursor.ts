import { DataObject } from '@jest-games-organization/backend-package-object-types';

export type DecodedCursor<Record extends DataObject> = {
  data: { [key in keyof Record]: Record[key] };
  args: { orderBy: { [key in keyof Record]?: 'asc' | 'desc' }[] };
};
