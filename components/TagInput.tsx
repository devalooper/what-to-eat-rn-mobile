import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { Text, View } from "./Themed";
import React, { useState, useReducer } from "react";

import Icon from "./Icon";

import type { Tag, TagProps } from "../store/types";
import TagReducer, { ACTION_TYPE } from "../store/reducer/Tag";

import { TextInput, Badge, Pressable, Wrap } from "@react-native-material/core";

export default function TagInput() {
  const [input, setInput] = useState<string>("");
  const [tags, dispatch] = useReducer(TagReducer, []);

  const deleteTag = (id: number) => dispatch({ type: ACTION_TYPE.REMOVE_TAG, payload: id });
  const addTag = (e: any) => {
    e.preventDefault();
    if (!input) return;

    dispatch({
      type: ACTION_TYPE.ADD_TAG, payload: {
        name: input,
        id: tags.length + 1
      }
    })
    setInput("");

    // again focus on input
    e.target.focus();
  }

  return (
    <View>
      <TextInput
        variant="outlined"
        label="Add Ingredients"
        style={{ margin: 16 }}
        value={input}
        onChangeText={setInput}
        focusable={true}
        onSubmitEditing={addTag}
        autoFocus={true}
        blurOnSubmit={false}
      />
      <Wrap style={TagInputStyle.container}>
        <Wrap m={4} >
          {tags.map((tag) => <Tag tag={tag} deleteTag={deleteTag} />)}
        </Wrap>
      </Wrap>
    </View>
  )
}

function Tag({ tag, deleteTag }: TagProps) {
  return (
    <Pressable
      pressEffect="ripple"
      key={tag.id}
      style={TagStyles.container}
      onPress={() => deleteTag(tag.id)}
    >
      <Badge label={tag.name} />
    </Pressable>
  )
}

const TagStyles = StyleSheet.create({
  container: {
    display: "flex",
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 4,
    margin: 4,
  },
  wrapper: {
    maxWidth: "100%",
  },
  tagText: {
    fontSize: 18,
    fontWeight: "bold",
  }
})

const TagInputStyle = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center"
  },
  wrapper: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
  }
})