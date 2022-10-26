import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { NestedFloatFilter } from './NestedFloatFilter';
import { NestedFloatNullableFilter } from './NestedFloatNullableFilter';
import { Scalars } from './Scalars';

export type FloatNullableFilter = {
  equals?: Nullable<Scalars['Float']>;
  gt?: Nullable<Scalars['Float']>;
  gte?: Nullable<Scalars['Float']>;
  in?: Nullable<Array<Nullable<Scalars['Float']>>>;
  lt?: Nullable<Scalars['Float']>;
  lte?: Nullable<Scalars['Float']>;
  not?: Nullable<NestedFloatNullableFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['Float']>>>;
};
