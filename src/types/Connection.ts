import { Edge } from './Edge';
import { PageInfo } from './PageInfo';

export type Connection<Node extends { [key: string]: any }> = {
  edges: Edge<Node>[];
  pageInfo: PageInfo;
};
