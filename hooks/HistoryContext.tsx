/**
 * See https://react.dev/learn/scaling-up-with-reducer-and-context
 */

import { createContext, ReactNode, useContext, useState } from "react";


export type HistoryType = {
    history: string[],
    addHistory: (x: string) => void
}

export const HistoryContext = createContext<HistoryType>({
    history: [],
    addHistory: (x) => { throw new Error(x) }
});


/**
 * The HistoryProvider component can be used as a parent component to all those
 * components that need to access or modify a shared history.
 */
type Props = { children: ReactNode };
export function HistoryProvider({ children }: Props) {

    const [history, setHistory] = useState<string[]>([]);

    const addHistory = (x: string) => setHistory([...history, x]);

    return <HistoryContext.Provider value={{ history, addHistory }}>
        {children}
    </HistoryContext.Provider>;
}

/**
 * Components can get access to the history and the reducer simply with:
 *
 * const { addHistory, history } = useHistory();
 */
export function useHistory(): HistoryType {
    return useContext(HistoryContext);
}

