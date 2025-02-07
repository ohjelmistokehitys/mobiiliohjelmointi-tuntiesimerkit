import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

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
        const doFetch = async () => {
            try {
                setLoading(true);
                const resp = await fetch("https://gist.githubusercontent.com/swd1tn002/c9f3379873a3fcba3db2fbeef8edbb66/raw/f61fd8c9561659ace8e9d23e45db679b79ac7e6e/articles.json")
                if (!resp.ok) {
                    throw new Error(resp.status.toString());
                }
                const json = await resp.json();
                setArticles(json);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        doFetch();
    }, []);

    return <ArticleContext.Provider value={{ loading, articles }}>
        {children}
    </ArticleContext.Provider>
}


export function useArticles() {
    return useContext(ArticleContext);
}