import { INGREDIENT_TAG } from "@/constants";
import { ingredientTagReducer } from "@/reducers/IngredientTagReducer";
import { getPopularIngredients, PopulerIngredientImages } from "@/store/DummyData/Tags";
import { LinkButton, TextField } from "@/components/"
import { upperCaseFirstLetter, randomColor } from "@/utils";
import { ScrollView, StyleSheet, View, Text, TextInput, Pressable } from "react-native"
import React, { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import shortid from "shortid";

import { Badge, HStack, Image, Divider } from "native-base"
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
  // const user = useSelector(getUser);

  const [tags, dispatch] = useReducer(ingredientTagReducer, []);
  const filteredTags = useMemo(() => popularTags.filter((p) => p.name.toLowerCase().includes(input.toLowerCase())), [input])

  const removeTag = (id) => dispatch({ type: INGREDIENT_TAG.REMOVE_TAG, payload: id })
  const addTag = () => {
    if (!input ||
      tags.find((tag) => (tag.name.toLowerCase() === input.toLowerCase()))
    ) return;

    if (filteredTags.find((tag) => tag.name.toLowerCase() === input.toLowerCase())) {
      const ingredient = PopulerIngredients.find((ingredient) => ingredient.name.toLowerCase() === input.toLowerCase())
      dispatch({
        type: INGREDIENT_TAG.ADD_TAG, payload: ingredient
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
        image: exampleTag.image,
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
    <View style={styles.container}>
      <TextField
        style={styles.input}
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
      <View style={styles.wrapper}>
        <ScrollView style={styles.tagContainer}>
          <Text variant="caption" style={[typography.smallText, { color: colors.text }, { marginTop: 4 }]}>{strings.home.myIngredients}</Text>
          <HStack direction="row" flexWrap="wrap" m={1}>
            {tags.map((tag) => <Tag actionType={"REMOVE_TAG"} tag={tag} action={removeTag} key={tag.id} />)}
          </HStack>
        </ScrollView>
        <Divider my="2" />
        {
          popularTags.length > 0 &&
          <ScrollView style={styles.popularTagsContainer}>
            <ScrollView>
              <Text variant="caption" style={[typography.smallText, { color: colors.text }, { marginTop: 2 }]}>{strings.home.popularIngredientsTitle}</Text>
              <HStack direction="row" flexWrap="wrap" mb={2} m={1} space={1} >
                {popularTags.map((tag) => <Tag actionType={"ADD_TAG"} tag={tag} action={addExampleTag} key={tag.id} />)}
              </HStack>
            </ScrollView>
          </ScrollView>
        }
      </View>
      {
        isError.status && <View>
          <Text style={[typography.text, { position: "absolute", start: 16, end: 16, bottom: 16, backgroundColor: "red", color: colors.text }]}>{isError?.message}</Text>
        </View>
      }
      <LinkButton to={{ screen: "Suggestions Screen", params: { tags } }} title={strings.home.search} />
    </View>
  )
}

const Tag = React.memo(function Tag({ tag, actionType, action }) {
  const { colors } = useTheme();

  const onPress = (id) => {
    if (actionType == "REMOVE_TAG") action(id)
    else if (actionType == "ADD_TAG") action(tag)
  }

  return (
    <Pressable onPress={() => onPress(tag.id)}>
      <HStack space={1} label={tag.name} colorScheme="info" style={[styles.badge, {backgroundColor: randomColor()}]}>
        <Image
          size={6}
          borderRadius={100}
          source={tag.image}
          alt="Food Image" />
        <Text style={[typography.text, { color: colors.text }, styles.badgeText]}>{upperCaseFirstLetter(tag.name)}</Text>
      </HStack>
    </Pressable>
  )
}, (prevProps, nextProps) => {
  return prevProps.tag.name === nextProps.tag.name
})