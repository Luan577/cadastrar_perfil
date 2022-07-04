import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 30,
    letterSpacing: 4,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary,
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.secondary,
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
    color: colors.secondary,
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%",
    color: colors.black

  },
  icon: {
    fontSize: 24,
    color: colors.secondary,
    padding: 10
  },
})

export default styles;