import { ACTION_TYPE } from './reducer/Tag';

export type Tag = {
  name: string;
  id: string;
}

export type TagProps = {
  key: string;
  tag: Tag;
  action: any;
  actionType: "ADD_TAG" | "REMOVE_TAG";
}