import Solution from "./Solution";
import KataData from "./KataData";
import { StyleSheet, View, ScrollView, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { getKata } from "../api"; 

export default function KataPage() {
    const { kata, isLoading, error } : { kata: any, isLoading: boolean, error: any} = useFetchKata(2); // this will need to fetch the current kata (perhaps by a context?)
    const [ isComplete, setComplete ] = useState(false);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error...Katapage </Text> // Add indepth error handling...
    if (!kata) return <Text>Kata not found</Text>; 

    return (
        <View>
            <ScrollView>
                <KataData kata={kata}/>
                <Solution kata_id={kata.kata_id} setComplete={setComplete}/>
            </ScrollView>
        </View>
    )
}

function useFetchKata(kata_id: number) {
    const [kata, setKata] = useState();
    const [isLoading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const loadComments = async () => {
        setLoading(true);
        try {
            const loadedKata = await getKata(kata_id);
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

