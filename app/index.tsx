import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { news } from "../news";

type ArticleProps = {
  article: {
    title: string,
    lead: string | null,
    id: string
  }
};

function Article({ article }: ArticleProps) {
  return <View>
    <Text style={styles.articleTitle}>{article.title}</Text>
    <Text>{article.lead}</Text>
  </View>;
}

export default function Index() {
  const separator = () => <View style={styles.separator} />
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uutiset ({news.length} kpl)</Text>

      <FlatList
        data={news}
        ItemSeparatorComponent={separator}
        renderItem={({ item, index }) => <Article article={item} />
        } />
    </View>
  );
}

let styles = StyleSheet.create({
  articleTitle: {
    fontWeight: "bold",
    fontSize: 16
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 20,
    gap: 20
  },
  separator: {
    marginVertical: 15,
    borderColor: "gray",
    borderBottomWidth: 1
  }
});