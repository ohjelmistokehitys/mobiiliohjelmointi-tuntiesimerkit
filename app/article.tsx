import { Text, View } from "react-native";
import { news } from "../news";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { styles } from "../styles";


/**
 * This component displays a single article based on the `id` parameter received
 * from the router.
 */
export default function Article() {
  const { id } = useLocalSearchParams();
  const article = news.find(a => a.id === id);

  if (!article) {
    return <Text>Not found 😦</Text>;
  }

  return (
    <>
      {/* You can change the screen options with Stack.Screen */}
      <Stack.Screen options={{ title: article.title }} />

      <View style={styles.container}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.bodyText}>{article.body}</Text>
      </View>
    </>
  );
}
