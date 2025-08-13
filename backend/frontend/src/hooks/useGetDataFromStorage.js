import { useState } from "react"


const useGetDataFromStorage = (name) => {
    const [data, setData] = useState([])
    

    const getData = () => {
        const val = JSON.parse(localStorage.getItem(name)) || []
        setData(val)
    }


    return {
        data,
        getData
    }

}

export default useGetDataFromStorage