export type Edge<Node extends { [key: string]: any }> = {
  cursor: string;
  node: Node;
};
