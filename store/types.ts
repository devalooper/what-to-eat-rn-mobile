export type Tag = {
  name: string;
  id: number;
}

export type TagProps = {
  tag: Tag;
  deleteTag: (id: number) => void;
}