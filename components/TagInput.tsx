import { ScrollView, StyleSheet } from "react-native"
import { View } from "./Themed";
import React, { useState, useReducer, useEffect } from "react";
import shortid from "shortid";

import type { Tag, TagProps } from "../store/types";
import TagReducer, { ACTION_TYPE } from "../store/reducer/Tag";
import { randomColor } from "../utils";

import { TextInput, Wrap, Text, Button, Snackbar, Chip } from "@react-native-material/core";

import { ExamplePopulerIngredients } from "../store/dummyData/Tags";

export default function TagInput() {
  const [input, setInput] = useState<string>("");
  const [tags, dispatch] = useReducer(TagReducer, []);
  const [exampleTags, setExampleTags] = useState<Tag[]>(ExamplePopulerIngredients);
  const [isError, setIsError] = useState<{ status: boolean, message: string }>({ status: false, message: "" })

  const removeTag = (id: string) => dispatch({ type: ACTION_TYPE.REMOVE_TAG, payload: id })
  const addTag = () => {
    if (!input ||
      tags.find((tag: Tag) => (tag.name.toLocaleLowerCase() === input.toLocaleLowerCase()))
    ) return;

    dispatch({
      type: ACTION_TYPE.ADD_TAG, payload: {
        name: input,
        id: shortid.generate() as string
      }
    })
    setInput("");
  }

  const addExampleTag = (exampleTag: Tag) => {
    // if(tags.includes((tag: Tag) => tag.name === exampleTag.name.toLocaleLowerCase())) return
    if (tags.find((tag: Tag) => tag.name.toLocaleLowerCase() === exampleTag.name.toLocaleLowerCase()))
      return setExampleTags(exampleTags.filter(tag => tag.name !== exampleTag.name))
    else setExampleTags(exampleTags.filter(tag => tag.name !== exampleTag.name))

    dispatch({
      type: ACTION_TYPE.ADD_TAG,
      payload: {
        name: exampleTag.name,
        id: shortid.generate()
      }
    })
  }

  useEffect(() => {
    if (tags.find((tag: Tag) => (tag.name.toLocaleLowerCase() === input.toLocaleLowerCase())))
      setIsError({
        status: true,
        message: "This ingredient already exists"
      })
    else setIsError({
      status: false,
      message: ""
    })

    tags.filter((tag: Tag) => {
      if (exampleTags.includes(tag)) {
        dispatch({ type: ACTION_TYPE.SET_TAG, payload: exampleTags.filter(exampleTag => exampleTag !== tag) })
      }
    })
  }, [tags, input])

  return (
    <View style={{ margin: 16 }} lightColor="#fff" darkColor="#000">
      <TextInput
        variant="outlined"
        label="Add Ingredients"
        value={input}
        onChangeText={setInput}
        focusable={true}
        onSubmitEditing={addTag}
        autoFocus={true}
        blurOnSubmit={false}
      />
      <Text variant="caption">Please enter ingredients; Ex: [tomato, pepper, meat]</Text>
      <View style={TagInputStyle.container}>
        <ScrollView>
          <Wrap style={TagInputStyle.wrapper}>
            <Wrap m={4} >
              {tags.map((tag: Tag) => <Tag key={tag.id} actionType={"REMOVE_TAG"} tag={tag} action={removeTag} />)}
            </Wrap>
          </Wrap>
        </ScrollView>
        {
          exampleTags.length > 0 && <Wrap style={TagInputStyle.exampleContainer}>
            <Text variant="caption">Populer Ingredients</Text>
            <ScrollView>
              <Wrap style={TagInputStyle.wrapper}>
                <Wrap m={4} >
                  {exampleTags.map((tag: Tag) => <Tag key={tag.id} actionType={"ADD_TAG"} tag={tag} action={addExampleTag} />)}
                </Wrap>
              </Wrap>
            </ScrollView>
          </Wrap>
        }
      </View>
      {
        isError.status && <View style={{ flex: 1 }}>
          <Snackbar
            message={isError?.message}
            style={{ position: "absolute", start: 16, end: 16, bottom: 16, backgroundColor: "red" }}
          />
        </View>
      }
      <Button
        variant="contained"
        onPress={addTag}
        style={{ marginTop: 8 }}
        title="Search"
      />
    </View>
  )
}

const Tag = React.memo(function Tag({ key, tag, actionType, action }: TagProps) {
  const onPress = (id: string) => {
    if (actionType == "REMOVE_TAG") action(id)
    else if (actionType == "ADD_TAG") action(tag)
  }

  return (
    <View
      key={key}
      style={TagStyles.container}
    >
      <Chip label={tag.name} style={TagStyles.chip} onPress={() => onPress(tag.id)} color={randomColor() || "blue"} />
    </View>
  )
}, (prevProps, nextProps) => {
  return prevProps.tag.name === nextProps.tag.name
})

const TagStyles = StyleSheet.create({
  container: {
    display: "flex",
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "row",
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
  chip: {
    height: "100%",
  }
})

const TagInputStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    flex: 1,
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center"
  },
  exampleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center"
  }
})
