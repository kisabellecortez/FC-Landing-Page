import React, { createContext, useEffect , useState } from 'react'

export const ImagesContext = createContext([]);

export const ImagesProvider  = ({ children }) => {
    const [imagesArray, setImagesArray] = useState([]); 

    useEffect(() => {
        fetch("https://fc-landing-page-production.up.railway.app//get-photos")
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