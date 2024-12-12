import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, SplashScreen, Tabs } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  SplashScreen.hideAsync();
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
