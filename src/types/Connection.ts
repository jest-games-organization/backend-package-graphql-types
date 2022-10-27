import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { Edge } from './Edge';
import { PageInfo } from './PageInfo';

export type Connection<Node extends DataObject> = {
  edges: Edge<Node>[];
  pageInfo: PageInfo;
};
