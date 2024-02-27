import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import CurrentUserContext from "app/context/UserContext";

export default function UserCard() {
  const currentUser = useContext(CurrentUserContext);
  //get hold of stats

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: currentUser.avatar_img_url,
        }}
        alt={`${currentUser.username}'s avatar`}
        style={styles.img}
      />
      <Text style={[styles.usernameHeader]}>{currentUser.username}</Text>
      <Text style={styles.bio}>"{currentUser.bio}"</Text>
      {/*stats go here*/}
      <Text>Katas Completed:</Text>
      <Text>Topics Done:</Text>
      <Text>Streak:</Text>
    </View>
  );
}

const marginTop = "10%";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flex: 3,
  },
  usernameHeader: {
    fontWeight: "bold",
    fontSize: 30,
  },
  img: {
    padding: 50,
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: marginTop,
  },
  bio: {
    margin: 20,
    fontFamily: "Arial",
    fontSize: 20,
  },
});
