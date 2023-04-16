import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { View } from "./Themed";
import React, { useState, useReducer } from "react";

import Icon from "./Icon";

import type { Tag, TagProps } from "../store/types";
import TagReducer, { ACTION_TYPE } from "../store/reducer/Tag";

import { TextInput, Badge, Pressable, Wrap, Text, Button } from "@react-native-material/core";

import DummyTagData from "../store/dummyData/Tags";

export default function TagInput() {
  const [input, setInput] = useState<string>("");
  const [tags, dispatch] = useReducer(TagReducer, DummyTagData);

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
  }

  return (
    <View style={{ margin: 16, marginTop: 4 }}>
      <TextInput
        variant="outlined"
        label="Ingredients"
        value={input}
        onChangeText={setInput}
        focusable={true}
        onSubmitEditing={addTag}
        autoFocus={true}
        blurOnSubmit={false}
      />
      <Text variant="caption">Please enter ingredients; Ex: [tomato, pepper, meat]</Text>
      <ScrollView>
        <Wrap style={TagInputStyle.container}>
          <Wrap m={4} >
            {tags.map((tag) => <Tag tag={tag} deleteTag={deleteTag} />)}
          </Wrap>
        </Wrap>
      </ScrollView>
      <Button
        variant="contained"
        onPress={addTag}
        style={{ marginTop: 8 }}
        title="Search"
      />
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
      <Badge label={tag.name} style={TagStyles.badge}/>
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
    backgroundColor: "#f0f0f0",
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
  },
  badge: {
    // width: "100%",
    height: "100%",
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
