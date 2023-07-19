"use client"
import { useState, useEffect } from "react";
import directus from 'lib/directus';




export default function Models() {

    async function getGlobals() {
        const { data } = await directus.items('models_files').readByQuery();
        return data;
    }
    
    const global = getGlobals();
    
    //state for global data
    const [globals, setGlobals] = useState(global);

    //useEffect to get global data
    useEffect(() => {
        getGlobals().then((data) => {
            setGlobals(data);
            //console.log(globals)
        });
    }, []);

    const GlobalMap = () => {globals.map((global) => {
        console.log(global)
        return (
        <div key={global.id}>
            <h1>{global.models_id}</h1>
            <p>{global.directus_files_id}</p>
        </div>)
    })}

    return (
        <>
            {globals !== undefined && globals.length > 0 ? console.log(globals) : <p>loading</p>}
        </>
    );
}