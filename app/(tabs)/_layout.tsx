import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import "../../global.css";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Websites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="globe-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="teams"
        options={{
          title: "Teams",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="account-group"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="account" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
