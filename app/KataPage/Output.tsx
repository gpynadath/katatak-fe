import { View, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { postKata } from '../api';
import { styles } from './KataPageStyleSheet';

export default function Output({ kata_id, input } : { kata_id: number, input: any }) {

    const { output, isLoading, error } : { output: any, isLoading: boolean, error: any} = useSendInput(kata_id, input);

    if (isLoading && input === 'Default') return <Text style={styles.baseText}>Submit your function to pass the tests!</Text>;
    if (isLoading && input !== 'Default') return <Text>Loading...</Text>;
    if (error) return <Text>Error...Solution </Text> // Add indepth error handling...
    if (!output) return <Text>No Output</Text>; // setComplete here.

    return (
        <>
            <Text>
                {output.success}
            </Text>
            <Text>
                {output.stderr}
            </Text>
            <Text>
                {output.stdout}
            </Text>
        </>
    )
}


function useSendInput(kata_id: number, input: string) {
    const [output, setOutput] = useState({});
    const [isLoading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const sendInput = async () => {
        setLoading(true);
        try {
            const response = await postKata(kata_id, input);
            setOutput(response);
            setError(null);
        } catch (err: any) {
            setError(err);
        } finally { 
            setLoading(false);
        }
    };

    useEffect(() => {
        if(input !== 'Default') {
            sendInput();
        }
    }, [input]);

    return { output, isLoading, error };
}