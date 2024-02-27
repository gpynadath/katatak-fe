import React, { useContext, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, ImageBackground } from "react-native";
import { Text, Card } from "@rneui/themed";
import { ActiveKataContext } from "app/context/ActiveKata";
import { router } from "expo-router";
import { useFonts } from 'expo-font';

type kataObj = {
  kata_id: number;
  kata_name: string;
  description: string;
  difficulty: string;
};
let colour = "red";

const imagePath = {
  hard: require('../assets/card_h.png'),
  medium: require('../assets/card_m.png'),
  easy: require('../assets/card_e.png'),
}

export default function KataCard({ kata }: { kata: kataObj }) {
  const { activeKata, setActiveKata } = useContext(ActiveKataContext);

  const [fontsLoaded, fontError] = useFonts({
    'Pixellari': require('../assets/fonts/Pixellari.ttf'),
    'dogica': require('../assets/fonts/dogica.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const selectKata = () => {
    router.push("/CurrentKata");
    setActiveKata(kata.kata_id);
  }

  return (
    <Card key={kata.kata_id} containerStyle={styles.hideCard}>
      <ImageBackground resizeMode="contain" source={getCardImg(kata.difficulty)} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.titleText}>{capTitleLength(kata.kata_name)}</Text>
        <Text style={styles.difficultyText}>{kata.difficulty}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.topicText}>{'< topic1 >'}</Text>
        <Text style={styles.topicText}>{'< topic2 >'}</Text>
      </View>
      <View style={styles.footer}>
      <FightButton selectKata={selectKata} />
      </View>
      </ImageBackground>
    </Card>
  );
}

function FightButton({selectKata} : any) {
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
      <Text style={styles.fightButtonText}>{'[ FIGHT! ]'}</Text>
    </Pressable>
  )
}

// move this to utility class.
function capTitleLength(title : string) {
  const maxLength = 20
  if(title.length > maxLength) {
    const cappedTitle = `${title.substring(0, maxLength)}...`
    return cappedTitle;
  }

  return title;
}

// move this to utility class.
function getCardImg(difficulty : string) {
  switch(difficulty) {
    case "Easy":
      return imagePath.easy;
    case "Medium":
      return imagePath.medium;
    case "Hard":
      return imagePath.hard;
  }
}


const styles = StyleSheet.create({
  hideCard: {
    elevation: 0, 
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  card: {
    width: 213 * 1.5, 
    height: 97 * 1.5,
    alignSelf: 'center',
    justifyContent: 'space-between',
    //justifyContent: 'center', 
    //alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5
  },
  titleText: {
    fontFamily: "Pixellari", 
    fontSize: 16,
    marginLeft: 10
  },
  difficultyText: {
    fontFamily: "dogica", 
    fontSize: 8,
    marginRight: 10,
    marginTop: 6
  },
  topicText: {
    fontFamily: "dogica", 
    fontSize: 8,
    marginBottom: 15
  },
  content: {
    marginLeft: 10
  },
  footer: {
    alignItems: 'center',
  },
  fightButton: {
    flex: 3,
    alignSelf: 'center',
  },
  fightButtonText: {
    fontFamily: "Pixellari", 
    fontSize: 16,
    marginBottom: 8,
    color: 'black'
  },
  pressedFightButtonText: {
    fontFamily: "Pixellari", 
    fontSize: 16,
    marginBottom: 8,
    color: 'gray'
  }
});

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
