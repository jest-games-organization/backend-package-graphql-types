import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { Scalars } from './Scalars';

export type NestedIdNullableFilter = {
  contains?: Nullable<Scalars['ID']>;
  endsWith?: Nullable<Scalars['ID']>;
  equals?: Nullable<Scalars['ID']>;
  gt?: Nullable<Scalars['ID']>;
  gte?: Nullable<Scalars['ID']>;
  in?: Nullable<Array<Nullable<Scalars['ID']>>>;
  lt?: Nullable<Scalars['ID']>;
  lte?: Nullable<Scalars['ID']>;
  not?: Nullable<NestedIdNullableFilter>;
  notIn?: Nullable<Array<Nullable<Scalars['ID']>>>;
  startsWith?: Nullable<Scalars['ID']>;
};
