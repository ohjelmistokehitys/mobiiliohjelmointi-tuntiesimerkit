import { Text, TextProps } from "react-native"
import styles from "./styles"

const Title = ({ children }: TextProps) => <Text style={styles.title}>{children}</Text>
const StyledText = ({ children }: TextProps) => <Text style={styles.text}>{children}</Text>

export { Title, StyledText };
