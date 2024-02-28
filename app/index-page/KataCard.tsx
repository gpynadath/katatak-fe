import React, { useContext, useState } from "react";
import { View, Pressable, ImageBackground } from "react-native";
import { Text, Card } from "@rneui/themed";
import { ActiveKataContext } from "app/context/ActiveKata";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import { styles } from "./indexPageStylesheet";

type kataObj = {
  kata_id: number;
  kata_name: string;
  description: string;
  difficulty: string;
  topics: string[];
};
let colour = "red";

const imagePath = {
  hard: require("../../assets/card_h.png"),
  medium: require("../../assets/card_m.png"),
  easy: require("../../assets/card_e.png"),
};

export default function KataCard({
  kata,
  solved,
}: {
  kata: kataObj;
  solved: boolean;
}) {
  const { activeKata, setActiveKata } = useContext(ActiveKataContext);
  const solvedText = solved ? "SOLVED" : null;

  const [fontsLoaded, fontError] = useFonts({
    Pixellari: require("../../assets/fonts/Pixellari.ttf"),
    dogica: require("../../assets/fonts/dogica.ttf"),
    Annoymous: require("../../assets/fonts/Anonymous_Pro.ttf"),
  });

  const selectKata = () => {
    router.push("/CurrentKata");
    setActiveKata(kata.kata_id);
  };

  return (
    <Pressable onPress={selectKata}>
      <Card key={kata.kata_id} containerStyle={styles.hideCard}>
        <ImageBackground
          resizeMode="contain"
          source={getCardImg(kata.difficulty)}
          style={styles.card}
        >
          <View style={styles.kataHeader}>
            <Text style={styles.titleText}>
              {capTitleLength(kata.kata_name)}
            </Text>
            <Text style={styles.topicText}>{solvedText}</Text>
            <Text style={styles.difficultyText}>{kata.difficulty}</Text>
          </View>
          <View style={styles.content}>
            {kata.topics.map((topic) => {
              return (
                <Text style={styles.topicText} key={topic + kata.kata_id}>
                  {topic}
                </Text>
              );
            })}
          </View>
          <View style={styles.footer}>
            <FightButton selectKata={selectKata} />
          </View>
        </ImageBackground>
      </Card>
    </Pressable>
  );
}

function FightButton({ selectKata }: any) {
  const [isPressed, setIsPressed] = useState<Boolean>(false);

  const onPressInEvent = () => {
    setIsPressed(true);
  };

  // Function to revert text color when released
  const onPressOutEvent = () => {
    setIsPressed(false);
    selectKata();
  };

  return (
    <Pressable onPress={onPressInEvent} onPressOut={onPressOutEvent}>
      <Text style={styles.fightButtonText}>{"[ FIGHT! ]"}</Text>
    </Pressable>
  );
}

// move this to utility class.
function capTitleLength(title: string) {
  const maxLength = 20;
  if (title.length > maxLength) {
    const cappedTitle = `${title.substring(0, maxLength)}...`;
    return cappedTitle;
  }

  return title;
}

// move this to utility class.
function getCardImg(difficulty: string) {
  switch (difficulty) {
    case "Easy":
      return imagePath.easy;
    case "Medium":
      return imagePath.medium;
    case "Hard":
      return imagePath.hard;
  }
}

/*
<Text style={styles.name}>{kata.kata_name}</Text>
                <Text style={styles.name}>{kata.description}</Text>
                <Text style={styles.name}>{kata.difficulty}</Text>
                <Pressable
                  onPress={() => {
                    router.push("/CurrentKata");
                    onPressFunction(kata.kata_id);
                  }}
                >
                  <Text style={styles.buttonText}>Solve this!</Text>
                </Pressable>

                  button: {
    height: 5,
  },
  user: {
    marginBottom: 6,
  },
  name: {
    fontSize: 10,
    marginTop: 5,
  },
  buttonText:{
    borderColor:"lightblue",
    borderWidth:2,
    width:80,
    borderRadius:5,
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  }
*/
