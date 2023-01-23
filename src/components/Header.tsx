import { View } from "react-native";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row item-center justify-between">
      <Logo />
    </View>
  );
}
