import { Text, TextProps } from "react-native"
import styles from "./styles"

const Title = ({ children, style: propStyle }: TextProps) => <Text style={[styles.title, propStyle]}>{children}</Text>

const StyledText = ({ children, style: propStyle }: TextProps) => <Text style={[styles.text, propStyle]}>{children}</Text>

export { Title, StyledText };
