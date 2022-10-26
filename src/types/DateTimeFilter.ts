import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { NestedDateTimeFilter } from './NestedDateTimeFilter';
import { Scalars } from './Scalars';

export type DateTimeFilter = {
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  not?: Nullable<NestedDateTimeFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
};
