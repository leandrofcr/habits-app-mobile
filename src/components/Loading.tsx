import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#09090a",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator color="#7c3aed" />
    </View>
  );
}
