import { ArticleProvider } from "@/hooks/ArticleContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <ArticleProvider><Stack /></ArticleProvider>;
}
