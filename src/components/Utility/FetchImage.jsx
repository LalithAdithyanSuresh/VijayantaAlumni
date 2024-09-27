import React, { useEffect, useState } from "react";
import { storage } from "./FetchFireBase.jsx";
import { ref, getDownloadURL } from "firebase/storage";
function FetchImage({Path}) {
    const getImageUrl = async (imagePath) => {
        try {
            const imageRef = ref(storage, imagePath);
            const url = await getDownloadURL(imageRef);
            return url;
        } catch (error) {
            console.error("Error fetching image URL:", error);
        }
    };

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            const url = await getImageUrl(Path);
            setImageUrl(url);
        };
        fetchImage();
    }, [Path]);

    return (
        <div className='h-full w-full overflow-hidden rounded'>
            {imageUrl ? <img src={imageUrl} alt="Firebase Image" style={{ width: '100%', height: '100%', objectFit: 'cover'}} className='hover:scale-110 duration-200 cursor-pointer' /> : <p>Loading...</p>}
        </div>
    );
}

export default FetchImage;