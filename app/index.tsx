import { styles } from "@/styles";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import React from 'react';
import { GitHubRepo } from "./types";

async function searchRepositories(keyword: string): Promise<GitHubRepo[]> {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&per_page=100`;

    let response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.status.toString());
    }

    let json = await response.json();
    return json.items;
}


export default function GitRepositorySearch() {
    const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
    const [keyword, setKeyword] = useState("react");

    const doSearch = () => {
        searchRepositories(keyword)
            .then(repos => {
                setRepositories(repos);
                console.log(repos);
            });
    };

    return <View style={styles.container}>
        <Text style={styles.title}>GitHub search</Text>
        <Text style={styles.bodyText}>Search for repositories</Text>
        <Button title="Search" onPress={doSearch} />
        <FlatList
            data={repositories}
            renderItem={({ item }) => <View style={{ paddingBottom: 20 }}>
                <Text style={styles.bodyText}>{item.full_name}</Text>
                <Text style={styles.bodyText}>{item.owner?.login}</Text>
            </View>}
        />
    </View>;
}