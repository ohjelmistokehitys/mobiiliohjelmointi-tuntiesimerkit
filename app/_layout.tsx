import { ArticleProvider } from "@/hooks/ArticleContext";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return <ArticleProvider>
    <Stack />
  </ArticleProvider>;
}
