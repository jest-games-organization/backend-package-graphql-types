import { DataObject } from '@jest-games-organization/backend-package-object-types';

export type Edge<Node extends DataObject> = {
  cursor: string;
  node: Node;
};
