import { INGREDIENT_TAG } from "@/constants";
import { ingredientTagReducer } from "@/reducers/IngredientTagReducer";
import { getPopularIngredients } from "@/store/DummyData/Tags";
import { LinkButton } from "@/components/LinkButton"
import { randomColor } from "@/utils";
import { ScrollView, StyleSheet, View, Text, TextInput, Pressable } from "react-native"
import React, { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import shortid from "shortid";

import { Stack, Container, Box, Flex, Badge, HStack } from "native-base"
import { Link } from "@react-navigation/native"

import { typography } from '@/theme';
import { getUser } from '@/selectors/UserSelectors';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { styles } from '@/screens/Home/Home.styles';
import { strings } from '@/localization'
// import { Config } from 'react-native-config';

const PopulerIngredients = getPopularIngredients()

export function Home() {
  const [input, setInput] = useState("");
  const [popularTags, setPopularTags] = useState(PopulerIngredients);
  const [isError, setIsError] = useState({ status: false, message: "" })

  const { colors } = useTheme();
  const user = useSelector(getUser);

  const [tags, dispatch] = useReducer(ingredientTagReducer, []);
  const filteredTags = useMemo(() => popularTags.filter((p) => p.name.toLowerCase().includes(input.toLowerCase())), [input])

  const removeTag = (id) => dispatch({ type: INGREDIENT_TAG.REMOVE_TAG, payload: id })
  const addTag = () => {
    if (!input ||
      tags.find((tag) => (tag.name.toLowerCase() === input.toLowerCase()))
    ) return;


    if (filteredTags.find((tag) => tag.name.toLowerCase() === input.toLowerCase())) {
      dispatch({
        type: INGREDIENT_TAG.ADD_TAG, payload: {
          name: input,
          id: shortid.generate()
        }
      })
      setInput("");
    }
    else {
      setIsError({
        status: true,
        message: strings.home.warningText
      })
    }
  }

  const addExampleTag = (exampleTag) => {
    if (tags.find((tag) => tag.name.toLowerCase() == exampleTag.name.toLowerCase())) return
    dispatch({
      type: INGREDIENT_TAG.ADD_TAG,
      payload: {
        name: exampleTag.name,
        id: shortid.generate()
      }
    })
  }

  useEffect(() => {
    if (!input) return

    if (tags.find((tag) => (tag.name.toLowerCase() === input.toLowerCase()))) {
      setIsError({
        status: true,
        message: strings.home.existingIngredient
      })
    } else setIsError({
      status: false,
      message: ""
    })

    setPopularTags((oldPopularTags) => {
      return oldPopularTags.filter((popularTag) => popularTag.name.toLowerCase().includes(input.toLowerCase() || !tags.find((tag) => tag.name.toLowerCase() === popularTag.name.toLowerCase())))
    })

    return () => {
      setPopularTags(PopulerIngredients)
    }
  }, [input])

  useEffect(() => {
    setPopularTags(PopulerIngredients.filter((popularIngredient) => {
      return !tags.find((tag) => tag.name.toLowerCase() === popularIngredient.name.toLowerCase())
    }))
  }, [tags])

  return (
    <Box style={{ margin: 16 }}>
      <TextInput
        variant="outlined"
        label="Add Ingredients"
        value={input}
        onChangeText={setInput}
        focusable={true}
        onSubmitEditing={addTag}
        autoFocus={true}
        blurOnSubmit={false}
        placeholder={strings.home.placeholder}
      />
      <Text style={[typography.title, { color: colors.text }]}>{strings.home.infoText}</Text>
      <Box>
        <ScrollView>
          <HStack direction="row" flexWrap="wrap" m={4} space={2} >
            {tags.map((tag) => <Tag actionType={"REMOVE_TAG"} tag={tag} action={removeTag} key={tag.id} />)}
          </HStack>
        </ScrollView>
        {
          popularTags.length > 0 && <Box >
            <Text variant="caption" style={[typography.title, { color: colors.text }]}>{strings.home.popularIngredientsTitle}</Text>
            <ScrollView>
              <HStack direction="row" flexWrap="wrap" mb="2.5" m={4} space={2} >
                {popularTags.map((tag) => <Tag actionType={"ADD_TAG"} tag={tag} action={addExampleTag} key={tag.id} />)}
              </HStack>
            </ScrollView>
          </Box>
        }
      </Box>
      {
        isError.status && <Box>
          <Text style={[typography.title, { position: "absolute", start: 16, end: 16, bottom: 16, backgroundColor: "red", color: colors.text }]}>{isError?.message}</Text>
        </Box>
      }
      <LinkButton to={{ screen: "Suggestions Screen", params: { tags } }} title={strings.home.search} />
    </Box>
  )
}

const Tag = React.memo(function Tag({ tag, actionType, action }) {
  const onPress = (id) => {
    if (actionType == "REMOVE_TAG") action(id)
    else if (actionType == "ADD_TAG") action(tag)
  }

  return (
    <Pressable onPress={() => onPress(tag.id)}>
      <Badge label={tag.name} colorScheme="success">
        {tag.name}
      </Badge>
    </Pressable>
  )
}, (prevProps, nextProps) => {
  return prevProps.tag.name === nextProps.tag.name
})