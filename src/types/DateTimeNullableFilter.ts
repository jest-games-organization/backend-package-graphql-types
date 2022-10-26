import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { NestedDateTimeNullableFilter } from './NestedDateTimeNullableFilter';
import { Scalars } from './Scalars';

export type DateTimeNullableFilter = {
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  not?: Nullable<NestedDateTimeNullableFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
};
