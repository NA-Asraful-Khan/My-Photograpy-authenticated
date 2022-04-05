import { useEffect, useState } from "react";

const useRechartData =()=>{

    const [rechart, setRechart] = useState([]);
    useEffect(()=>{
        fetch('RechartData.json')
        .then(res=> res.json())
        .then(data => setRechart(data))
    }, []);

    return[rechart, setRechart];
}

export default useRechartData;