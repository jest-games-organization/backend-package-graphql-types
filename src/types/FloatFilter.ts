import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { NestedFloatFilter } from './NestedFloatFilter';
import { Scalars } from './Scalars';

export type FloatFilter = {
  equals?: Nullable<Scalars['Float']>;
  gt?: Nullable<Scalars['Float']>;
  gte?: Nullable<Scalars['Float']>;
  in?: Nullable<Array<Nullable<Scalars['Float']>>>;
  lt?: Nullable<Scalars['Float']>;
  lte?: Nullable<Scalars['Float']>;
  not?: Nullable<NestedFloatFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['Float']>>>;
};
