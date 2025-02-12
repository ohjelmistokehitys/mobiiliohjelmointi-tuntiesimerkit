import { ActivityIndicator, Alert, Button, FlatList, Image, StyleSheet, TextInput, View } from "react-native";
import styles from "../components/styles";
import { useState } from "react";
import { StyledText } from "../components/Text";

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

type RecipeType = {
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}

export default function RecipeSearch() {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState<RecipeType[]>([]);

    const search = async () => {
        try {
            setLoading(true);
            setRecipes([]);

            let response = await fetch(URL + encodeURIComponent(keyword));

            if (!response.ok) {
                console.error(response);
                throw new Error(`Error in search: ${response.status}`);
            }

            let json = await response.json();
            setRecipes(json.meals ?? []);
        } catch (e) {
            Alert.alert(`Search failed`)
        } finally {
            setLoading(false);
        }
    }

    return <View style={styles.container}>
        <TextInput style={styles.textInput}
            value={keyword}
            onChangeText={setKeyword}
            placeholder="Search by ingredient..."
            placeholderTextColor={styles.textInput.color} />

        <Button title="Search 🔍" onPress={search} />

        {loading && <ActivityIndicator size="large" />}

        <StyledText>{recipes.length} results:</StyledText>

        <FlatList
            style={recipeStyles.recipeList}
            data={loading ? [] : recipes}
            renderItem={({ item }) => <RecipeRow recipe={item} />}
            keyExtractor={(recipe) => recipe.idMeal}
        />
    </View>
}

function RecipeRow({ recipe }: { recipe: RecipeType }) {
    return <View style={recipeStyles.recipeRow}>
        <Image source={{ uri: recipe.strMealThumb }} style={recipeStyles.recipeImage} />
        <StyledText>{recipe.strMeal}</StyledText>
    </View>
}


const recipeStyles = StyleSheet.create({
    recipeList: {
        width: "100%"
    },
    recipeRow: {
        flexDirection: "row",
        gap: 20,
        padding: 20,
        alignItems: "center"
    },
    recipeImage: {
        width: 80,
        height: 80
    }
});
