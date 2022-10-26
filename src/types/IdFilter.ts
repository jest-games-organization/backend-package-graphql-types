import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { NestedIdFilter } from './NestedIdFilter';
import { QueryMode } from './QueryMode';
import { Scalars } from './Scalars';

export type IdFilter = {
  contains?: Nullable<Scalars['ID']>;
  endsWith?: Nullable<Scalars['ID']>;
  equals?: Nullable<Scalars['ID']>;
  gt?: Nullable<Scalars['ID']>;
  gte?: Nullable<Scalars['ID']>;
  in?: Nullable<Array<Nullable<Scalars['ID']>>>;
  lt?: Nullable<Scalars['ID']>;
  lte?: Nullable<Scalars['ID']>;
  mode?: Nullable<QueryMode>;
  not?: Nullable<NestedIdFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['ID']>>>;
  startsWith?: Nullable<Scalars['ID']>;
};
