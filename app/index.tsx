import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import userData from "./data.json";
import styles from "./AppStyles";
import PersonCard from "./PersonCard";

export default function Index() {
  return (
    <>
      {/* Screen Name*/}
      <Stack.Screen options={{title: "User List"}} />

      <ScrollView>
        {userData.map((users, index) => (
          <PersonCard
            key={index}
            name={users.name}
            email={users.email}
            photo={users.photo_url}> 
          </PersonCard>
          
        ))}
      </ScrollView>
    </>


  );
}


