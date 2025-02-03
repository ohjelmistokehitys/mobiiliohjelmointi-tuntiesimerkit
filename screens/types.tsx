/**
 * See https://reactnavigation.org/docs/typescript/
 */


import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Calculator: undefined;
            History: undefined;
        }
    }
}

export type RootParamList = {
    Calculator: undefined;
    History: undefined;
}

export type CalculatorType = BottomTabScreenProps<RootParamList, 'Calculator'>
export type HistoryType = BottomTabScreenProps<RootParamList, 'History'>
export type NavigationType = BottomTabScreenProps<RootParamList>;