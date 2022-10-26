import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { QueryMode } from './QueryMode';
import { NestedStringFilter } from './NestedStringFilter';
import { Scalars } from './Scalars';

export type StringFilter = {
  contains?: Nullable<Scalars['String']>;
  endsWith?: Nullable<Scalars['String']>;
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  mode?: Nullable<QueryMode>;
  not?: Nullable<NestedStringFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
  startsWith?: Nullable<Scalars['String']>;
};
