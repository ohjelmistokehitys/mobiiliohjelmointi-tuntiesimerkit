import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { news } from "../news";
import { Alert } from 'react-native';

type ArticleType = {
    title: string;
    lead: string;
    body: string;
    id: string;
}

const ArticleContext = createContext<{ loading: boolean, articles: ArticleType[] }>({ loading: false, articles: [] });


export function ArticleProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        setLoading(true);

        fetch("https://gist.githubusercontent.com/swd1tn002/c9f3379873a3fcba3db2fbeef8edbb66/raw/f61fd8c9561659ace8e9d23e45db679b79ac7e6e/articles.json")
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(resp.status.toString());
                }
                return resp.json();
            })
            .then(data => setArticles(data))
            .catch(e => Alert.alert(e))
            .finally(() => setLoading(false));
    }, []);

    return <ArticleContext.Provider value={{ loading, articles }}>
        {children}
    </ArticleContext.Provider>
}


export function useArticles() {
    return useContext(ArticleContext);
}