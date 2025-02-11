import { ArticleProvider } from "@/hooks/ArticleContext";
import { Stack } from "expo-router";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";

const initialize = async (db: SQLiteDatabase) => {
  try {
    await db.execAsync("CREATE TABLE IF NOT EXISTS shoppinglist (id INTEGER PRIMARY KEY NOT NULL, item TEXT);");
  } catch (error) {
    console.error("Could not open database", error);
  }
}

export default function RootLayout() {
  return <SQLiteProvider databaseName="shoppinglist" onInit={initialize}>
    <ArticleProvider>
      <Stack />
    </ArticleProvider>;
  </SQLiteProvider>
}
