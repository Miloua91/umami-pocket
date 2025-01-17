import React, { useState } from "react";
import { Stack } from "expo-router";
import {
  Text,
  View,
  Pressable,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Svg, { Path } from "react-native-svg";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Websites",
          headerRight: () => (
            <View>
              <Pressable
                onPress={() => setModalVisible(true)}
                className="bg-neutral-800 py-2 px-4 mx-5 rounded flex flex-row items-center gap-1 active:bg-neutral-600"
              >
                <MaterialIcons name="add" size={18} color="white" />
                <Text className="text-neutral-100">Add website</Text>
              </Pressable>
            </View>
          ),
        }}
      />

      <View className="py-5 px-5 w-full">
        <View className="flex flex-row justify-center items-center border rounded-md w-full px-4">
          <Svg viewBox="0 0 24 24" width="20em" height="20em">
            <Path
              clip-rule="evenodd"
              d="M11 2a9 9 0 1 0 5.618 16.032L21 22.414 22.414 21l-4.382-4.382A9 9 0 0 0 11 2zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0z"
            ></Path>
          </Svg>
          <TextInput className="w-full h-11" placeholder="Search" />
        </View>
        <Text>Websites</Text>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center mx-10">
          <View className="gap-6 bg-white rounded p-6 shadow-lg w-full">
            <Text className="font-bold text-lg">Add website</Text>
            <View className="flex-col justify-start items-start gap-2">
              <Text className="font-semibold">Name</Text>
              <TextInput className="border border-neutral-400 w-full rounded placeholder:px-4" />
            </View>
            <View className="flex-col justify-start items-start gap-2">
              <Text className="font-semibold">Domain</Text>
              <TextInput className="border border-neutral-400 w-full rounded placeholder:px-4" />
            </View>
            <View className="flex-row justify-between">
              <Pressable
                className="bg-neutral-800 py-2 rounded active:bg-neutral-600 w-[48%]"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text className="text-neutral-100 text-center">Save</Text>
              </Pressable>
              <Pressable
                className="bg-neutral-100 py-2 rounded active:bg-neutral-200 w-[48%]"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text className="text-neutral-800 text-center">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
