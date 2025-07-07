import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to NestFinder
          </Text>
        </View>
        <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">
          Let&apos;s Find{"\n"}
          <Text className="text-primary-300">Your Ideal Home</Text>
        </Text>
        <Text className="text-lg font-rubik text-black-200 text-center mt-12">
          Login to NestFinder with Google
        </Text>
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
        >
          <View className="flex items-center flex-row justify-center">
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
              Login with Google
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
