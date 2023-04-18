// import { useTheme } from '@react-navigation/native';
// import React from 'react';
// import { Text, View } from 'react-native';
// import { Config } from 'react-native-config';
// import { useSelector } from 'react-redux';
// import { strings } from '@/localization';
// import { getUser } from '@/selectors/UserSelectors';
// import { styles } from '@/screens/Home/Home.styles';
// import { typography } from '@/theme';

// export function Home() {
//   const { colors } = useTheme();
//   const user = useSelector(getUser);

//   return (
//     <View style={styles.container}>
//       <Text style={[typography.title, { color: colors.text }]}>
//         {strings.home.message} {user?.username}
//       </Text>
//       <Text style={[typography.text, { color: colors.text }]}>
//         {strings.home.variant} {Config.BUILD_VARIANT}
//       </Text>
//     </View>
//   );
// }

import { INGREDIENT_TAG } from "@/constants";
import { ingredientTagReducer } from "@/reducers/IngredientTagReducer";
import { PopulerIngredients } from "@/store/DummyData/Tags";
import { LinkButton } from "@/components/LinkButton"
import { randomColor } from "@/utils";
import { ScrollView, StyleSheet, View, Text, TextInput, Pressable } from "react-native"
import React, { useState, useReducer, useEffect, useMemo } from "react";
import shortid from "shortid";

import { Stack, Container, Box, Flex, Badge, HStack } from "native-base"
import { Link } from "@react-navigation/native"


// import { Wrap, Snackbar, Chip } from "@react-native-material/core";


export function Home() {
  const [input, setInput] = useState("");
  const [popularTags, setPopularTags] = useState(PopulerIngredients);
  const [isError, setIsError] = useState({ status: false, message: "" })

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
        message: "Please select from the list"
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

  //TODO: fix re-filter when delete input
  useEffect(() => {
    if (!input) return

    if (tags.find((tag) => (tag.name.toLowerCase() === input.toLowerCase()))) {
      setIsError({
        status: true,
        message: "This ingredient already exists"
      })
    } else setIsError({
      status: false,
      message: ""
    })

    setPopularTags(filteredTags)

    return () => {
      setPopularTags(PopulerIngredients.filter((exampleTag) => {
        return !tags.find((tag) => tag.name.toLowerCase() !== exampleTag.name.toLowerCase())
      }))
    }
  }, [input])

  useEffect(() => {
    setPopularTags(PopulerIngredients.filter((exampleTag) => {
      return !tags.find((tag) => tag.name.toLowerCase() === exampleTag.name.toLowerCase())
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
        placeholder="Ex: [tomato, pepper, meat]"
      />
      <Text>Please enter ingredients.</Text>
      <Box>
        <ScrollView>
          <HStack direction="row" flexWrap="wrap" m={4} space={2} >
            {tags.map((tag) => <Tag actionType={"REMOVE_TAG"} tag={tag} action={removeTag} key={tag.id} />)}
          </HStack>
        </ScrollView>
        {
          popularTags.length > 0 && <Box >
            <Text variant="caption">Populer Ingredients</Text>
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
          <Text style={{ position: "absolute", start: 16, end: 16, bottom: 16, backgroundColor: "red" }}>{isError?.message}</Text>
        </Box>
      }
      {/* <Link
        to={ }
        style={{ marginTop: 8, fontSize: 16, fontWeight: "bold", color: "red", padding: 8, backgroundColor: "blue", textAlign: "center" }}>
      </Link> */}

      <LinkButton to={{ screen: "Suggestions Screen", params: { tags } }} title={"Search"} />

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

// const TagStyles = StyleSheet.create({
//   container: {
//     display: "flex",
//     height: 40,
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     textAlign: "center",
//     alignContent: "center",
//     flexDirection: "row",
//     borderRadius: 10,
//     padding: 4,
//     margin: 4,
//   },
//   wrapper: {
//     maxWidth: "100%",
//   },
//   tagText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   chip: {
//     height: "100%",
//   }
// })

// const TagInputStyle = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//   },
//   wrapper: {
//     flex: 1,
//     minWidth: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     textAlign: "center"
//   },
//   exampleContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     textAlign: "center"
//   }
// })
