import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { NestedIntFilter } from './NestedIntFilter';
import { Scalars } from './Scalars';

export type IntFilter = {
  equals?: Nullable<Scalars['Int']>;
  gt?: Nullable<Scalars['Int']>;
  gte?: Nullable<Scalars['Int']>;
  in?: Nullable<Array<Nullable<Scalars['Int']>>>;
  lt?: Nullable<Scalars['Int']>;
  lte?: Nullable<Scalars['Int']>;
  not?: Nullable<NestedIntFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['Int']>>>;
};
