import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "app/context/UserContext";
import { getSolutionsByUserId, getKata } from "app/api";
import { useFonts } from "expo-font";

type solutionObj = {
  kata_id: number;
  kata_name: string;
  solution: string;
  solution_id: number;
  user_id: number;
  votes: number;
};

type kataObj = {
  kata_id: number;
  kata_name: string;
  description: string;
  difficulty: string;
  topics: string[];
};

export default function UserCard() {
  const currentUser = useContext(CurrentUserContext);
  const [isLoading, setLoading] = useState(true);
  const [numKatasCompleted, setNumKatasCompleted] = useState<number>(0);
  const [kataNamesCompleted, setKataNamesCompleted] = useState<string[]>([]);
  const [topicsDone, setTopicsDone] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const allSolutions = await getSolutionsByUserId(currentUser.user_id);

      const solvedKatasIds: number[] = [];
      allSolutions.map((solution: solutionObj) => {
        if (!solvedKatasIds.includes(solution.kata_id))
          solvedKatasIds.push(solution.kata_id);
      });
      setNumKatasCompleted(solvedKatasIds.length);

      const solvedKatasTopics: string[] = [];
      const namesOfCompletedKatas: string[] = [];
      await Promise.all(
        solvedKatasIds.map(async (id) => {
          const kata: kataObj = await getKata(id);
          kata.topics.map((topic: string) => {
            if (!solvedKatasTopics.includes(topic))
              solvedKatasTopics.push(topic);
          });
          if (!namesOfCompletedKatas.includes(kata.kata_name))
            namesOfCompletedKatas.push(kata.kata_name);
        })
      );
      setKataNamesCompleted(namesOfCompletedKatas);
      setTopicsDone(solvedKatasTopics);
      setLoading(false);
    };
    fetchData();
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    Pixellari: require("../assets/fonts/Pixellari.ttf"),
    dogica: require("../assets/fonts/dogica.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (isLoading) return <Text>Loading...</Text>;
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: currentUser.avatar_img_url,
          }}
          alt={`${currentUser.username}'s avatar`}
          style={styles.img}
        />
        <Text style={styles.usernameHeader}>{currentUser.username}</Text>
        <Text style={styles.bio}>"{currentUser.bio}"</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.topicText}>
            Number Of Katas Completed: {numKatasCompleted}
          </Text>
          <Text style={styles.topicText}>
            Katas Completed: {"\n\n > " + kataNamesCompleted.join("\n > ")}
          </Text>
          <Text style={styles.topicText}>
            Topics Done: {"\n\n > " + topicsDone.join("\n > ")}
          </Text>
        </View>
      </View>
    </>
  );
}

const marginTop = "10%";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flex: 3,
    backgroundColor: "#F2F2D0",
  },
  statsContainer: {
    backgroundColor: "#F2F2D0",
    textAlign: "left",
  },
  usernameHeader: {
    fontFamily: "Pixellari",
    fontSize: 25,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 10,
  },
  img: {
    padding: 50,
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: marginTop,
    marginBottom: 15,
  },
  bio: {
    margin: 20,
    fontFamily: "Pixellari",
    fontSize: 15,
    marginBottom: 30,
  },
  topicText: {
    fontFamily: "dogica",
    fontSize: 9,
    marginBottom: 15,

    padding: 5,
  },
  content: {
    marginLeft: 10,
  },
  footer: {
    alignItems: "center",
  },
});
