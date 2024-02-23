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
      <Text style={[styles.container, styles.usernameHeader]}>
        {currentUser.username}
      </Text>
      <Text style={styles.container}>{currentUser.bio}</Text>
      {/*stats go here*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  usernameHeader: {
    fontWeight: "bold",
    fontSize: 30,
  },
  img: {
    flex: 1,
  },
});
