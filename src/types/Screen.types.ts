import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined
  Tab: undefined
  Drawer: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
