import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { FilterByStringNested } from './FilterByStringNested';
import { Scalars } from './Scalars';

export type FilterByString = {
  contains?: Nullable<Scalars['String']>;
  endsWith?: Nullable<Scalars['String']>;
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  mode?: Nullable<Scalars['String']>;
  not?: Nullable<FilterByStringNested>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
  startsWith?: Nullable<Scalars['String']>;
};
