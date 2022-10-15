import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { FilterByIntNested } from './FilterByIntNested';
import { Scalars } from './Scalars';

export type FilterByInt = {
  equals?: Nullable<Scalars['Int']>;
  gt?: Nullable<Scalars['Int']>;
  gte?: Nullable<Scalars['Int']>;
  in?: Nullable<Array<Nullable<Scalars['Int']>>>;
  lt?: Nullable<Scalars['Int']>;
  lte?: Nullable<Scalars['Int']>;
  not?: Nullable<FilterByIntNested>;
  notIn?: Nullable<Array<Nullable<Scalars['Int']>>>;
};
