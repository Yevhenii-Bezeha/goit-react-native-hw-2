import { StyleSheet, Text } from "react-native";

type TextVariantProps = {
  title: string;
  variant: "h2";
};

export const TextVariant = ({ variant, title }: TextVariantProps) => {
  return <Text style={styles[variant]}>{title}</Text>;
};

const styles = StyleSheet.create({
  h2: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
  },
});
