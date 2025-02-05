import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import { styles, listStyles } from "../styles";
import { useArticles } from "@/hooks/ArticleContext";

type ArticleProps = {
  article: {
    title: string,
    lead: string | null,
    body: string,
    id: string
  }
};

/**
 * This component is used for rendering a single article in the article list.
 */
function ArticleInList({ article }: ArticleProps) {
  return (
    <Link href={
      {
        pathname: "./article",
        params: { id: article.id }
      }}>
      <View style={{ gap: 10 }}>
        <Text style={listStyles.articleTitle}>{article.title}</Text>
        <Text>{article.lead}</Text>
      </View>
    </Link>
  );
}


export default function Index() {
  const { articles, loading } = useArticles();

  const separator = () => <View style={listStyles.separator} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uutiset ({articles.length} kpl)</Text>

      {loading ?
        <ActivityIndicator size="large" style={{ alignSelf: "center" }} />
        :
        <FlatList
          data={articles}
          ItemSeparatorComponent={separator}
          renderItem={({ item, index }) => <ArticleInList article={item} />
          } />
      }
    </View>
  );
}
