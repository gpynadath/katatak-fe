import Solution from "./Solution";
import KataData from "./KataData";
import { StyleSheet, View, ScrollView, Text, Button } from "react-native";
import { useState, useEffect, useContext } from "react";
import { getKata } from "../api";
import { ActiveKataContext } from "../context/ActiveKata";
import Loading from "components/Loading";
import { styles } from "./KataPageStyleSheet";
import Error from "components/Error";

interface Kata {
  kata_id: number;
  kata_name: string;
  description: string;
  test_path: string;
  difficulty: string;
  date_created: string;
  votes: number;
  function_template: string;
}

interface FetchKata {
  kata: Kata | undefined;
  isLoading: boolean;
  error: any;
}

// Error Note: error is using any the moment to anticipate a custom error type to accept the format of the error recieved from the server.

export default function KataPage() {
  const { activeKata }: { activeKata: number } = useContext(ActiveKataContext);
  const { kata, isLoading, error }: FetchKata = useFetchKata(activeKata); // this will need to fetch the current kata (perhaps by a context?)
  const [isComplete, setComplete] = useState(false);

  if (error) return <Error />; // Add indepth error handling...
  if (!kata) return <Error />;

  return (
    <View style={containerStyles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={styles.kataPageScrollContainer}>
          <KataData kata_name={kata.kata_name} description={kata.description} />
          <Solution
            kata_id={kata.kata_id}
            setComplete={setComplete}
            function_template={kata.function_template}
          />
        </ScrollView>
      )}
    </View>
  );
}

function useFetchKata(kata_id: number) {
  const [kata, setKata] = useState<Kata>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadComments = async () => {
    setLoading(true);
    try {
      const loadedKata: Kata = await getKata(kata_id);
      setKata(loadedKata);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, [kata_id]);

  return { kata, isLoading, error };
}

const marginTop = "8%";
const containerStyles = StyleSheet.create({
  container: {
    marginTop: marginTop,
    backgroundColor: "#F2F2D0",

    flex: 1,
    alignItems: "center",
  },
});
