import { FlatList, Text, View } from "react-native";
import { news } from "../news";
import { Link } from "expo-router";
import { styles, listStyles } from "./styles";

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
      }}
      style={listStyles.articleLink}>
      <View style={{ gap: 10 }}>
        <Text style={listStyles.articleTitle}>{article.title}</Text>
        <Text>{article.lead}</Text>
      </View>
    </Link>
  );
}


export default function Index() {
  const separator = () => <View style={listStyles.separator} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uutiset ({news.length} kpl)</Text>

      <FlatList
        data={news}
        ItemSeparatorComponent={separator}
        renderItem={({ item, index }) => <ArticleInList article={item} />
        } />
    </View>
  );
}
