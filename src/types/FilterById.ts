import { Nullable } from '@jest-games-organization/backend-package-object-types';
import { FilterByIdNested } from './FilterByIdNested';
import { Scalars } from './Scalars';

export type FilterById = {
  contains?: Nullable<Scalars['ID']>;
  endsWith?: Nullable<Scalars['ID']>;
  equals?: Nullable<Scalars['ID']>;
  gt?: Nullable<Scalars['ID']>;
  gte?: Nullable<Scalars['ID']>;
  in?: Nullable<Array<Nullable<Scalars['ID']>>>;
  lt?: Nullable<Scalars['ID']>;
  lte?: Nullable<Scalars['ID']>;
  mode?: Nullable<Scalars['ID']>;
  not?: Nullable<FilterByIdNested>;
  notIn?: Nullable<Array<Nullable<Scalars['ID']>>>;
  startsWith?: Nullable<Scalars['ID']>;
};
