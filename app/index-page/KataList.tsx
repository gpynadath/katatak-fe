import { ScrollView, View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import KataCard from "./KataCard";
import CurrentUserContext from "app/context/UserContext";
import Loading from "../../loadingAndErrors/Loading";
import { getAllKatas, getSolutionsByUserId } from "app/api";
import currentKata from "app/(tabs)/CurrentKata";
import { styles } from "app/index-page/indexPageStylesheet";

type KataListProps = {
  topicsValue: string;
  orderValue: string;
};
type kataObj = {
  kata_id: number;
  kata_name: string;
  description: string;
  difficulty: string;
  topics: string[];
};
type solutionObj = {
  kata_id: number;
  kata_name: string;
  solution: string;
  solution_id: number;
  user_id: number;
  votes: number;
};

export default function KataList({ topicsValue, orderValue }: KataListProps) {
  const [kataData, setKataData] = useState<kataObj[]>([]);
  const [isLoading, setLoading] = useState(true);
  const currentUser = useContext(CurrentUserContext);
  const [usersSolvedKatas, setUsersSolvedKatas] = useState<number[]>([]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const allSolutions = await getSolutionsByUserId(currentUser.user_id);

      const solvedKatasIds: number[] = [];
      allSolutions.map((solution: solutionObj) => {
        if (!solvedKatasIds.includes(solution.kata_id))
          solvedKatasIds.push(solution.kata_id);
      });

      setUsersSolvedKatas(solvedKatasIds);
      if (topicsValue === "All Topics...") {
        const data = await getAllKatas("", orderValue);
        setKataData(data.data.katas);
        setLoading(false);
      } else {
        const data = await getAllKatas(topicsValue, orderValue);
        setKataData(data.data.katas);
        setLoading(false);
      }
    };
    fetchData();
  }, [topicsValue, orderValue]);

  if (isLoading) return <Loading />;
  return (
    <ScrollView>
      <View style={styles.katasContainer}>
        {kataData.map((kata) => {
          let solved = false;
          if (usersSolvedKatas.includes(kata.kata_id)) {
            solved = true;
          }
          return <KataCard kata={kata} key={kata.kata_id} solved={solved} />;
        })}
      </View>
    </ScrollView>
  );
}
