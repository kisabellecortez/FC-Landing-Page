import React, { createContext, useEffect , useState } from 'react'

export const ImagesContext = createContext([]);
const apiUrl = process.env.REACT_APP_API_URL;

export const ImagesProvider  = ({ children }) => {
    const [imagesArray, setImagesArray] = useState([]); 

    useEffect(() => {
        fetch(`${apiUrl}/get-photos`)
            .then((res) => res.json())
            .then((data) => setImagesArray(data.urls))
            .catch((err) => console.error(err));
    }, [])

    return(
        <ImagesContext.Provider value={imagesArray}>
            {children}
        </ImagesContext.Provider>
    )
}