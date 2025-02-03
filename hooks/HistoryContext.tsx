/**
 * See https://react.dev/learn/scaling-up-with-reducer-and-context
 */

import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

export type HistoryType = {
    history: string[],
    addHistory: Dispatch<string>
}

// "The value you want the context to have when there is no matching Provider in
// the tree above the component reading the context. This is meant as a
// "last resort" fallback."
export const HistoryContext = createContext<HistoryType>({
    history: [],
    addHistory: (x) => { throw new Error(x) }
});


type Props = { children: ReactNode };
export function HistoryProvider({ children }: Props): ReactNode {
    const adder = (arr: string[], add: string) => arr.concat(add);

    const [history, addHistory] = useReducer(adder, []);


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

