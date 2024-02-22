import CodeInputEditor from "./CodeInputEditor";
import Output from "./Output";
import { View, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function Solution({ kata_id, setComplete } : { kata_id: number, setComplete: any }) {
    const [ input, setInput ] = useState("Default");

    return (
        <>
        <CodeInputEditor setInput={setInput} />
        <Output kata_id={kata_id} input={ input } />
        </>
    )
}
