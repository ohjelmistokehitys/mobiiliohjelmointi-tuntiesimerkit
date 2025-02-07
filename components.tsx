
import { Text, View } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

type PropsType = {
    children: ReactNode
}

export function Container({ children }: PropsType): ReactNode {
    return <View style={styles.container}>{children}</View>;
}

export function RowView({ children }: PropsType): ReactNode {
    return <View style={{ flexDirection: "row" }}>{children}</View>;
}

export function Title({ children }: PropsType): ReactNode {
    return <Text style={styles.title}>{children}</Text>;
}

export function BodyText({ children }: PropsType): ReactNode {
    return <Text style={styles.bodyText}>{children}</Text>;
}

