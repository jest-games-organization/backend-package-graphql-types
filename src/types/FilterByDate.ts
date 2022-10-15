import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { FilterByDateNested } from './FilterByDateNested';
import { Scalars } from './Scalars';

export type FilterByDate = {
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  not?: Nullable<FilterByDateNested>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
};
