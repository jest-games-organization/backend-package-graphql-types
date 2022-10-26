import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { NestedIntNullableFilter } from './NestedIntNullableFilter';
import { Scalars } from './Scalars';

export type IntNullableFilter = {
  equals?: Nullable<Scalars['Int']>;
  gt?: Nullable<Scalars['Int']>;
  gte?: Nullable<Scalars['Int']>;
  in?: Nullable<Array<Nullable<Scalars['Int']>>>;
  lt?: Nullable<Scalars['Int']>;
  lte?: Nullable<Scalars['Int']>;
  not?: Nullable<NestedIntNullableFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['Int']>>>;
};
