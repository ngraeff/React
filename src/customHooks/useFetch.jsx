import React, { useState, useEffect} from "react"

const useFetch = (url) =>{
    const [data, setData] = useState([])
    const getData = () =>{
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
       getData()
    }, [])
    return [data]
}

export default useFetch
