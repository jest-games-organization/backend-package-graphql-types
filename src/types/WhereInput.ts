import { DataObject } from '@jest-games-organization/backend-package-object-types';

export type WhereInput<Record extends DataObject> = {
  [key in keyof Record]?: any;
} & {
  AND?: WhereInput<Record>[] | null | undefined;
  OR?: WhereInput<Record>[] | null | undefined;
  NOT?: WhereInput<Record>[] | null | undefined;
};
