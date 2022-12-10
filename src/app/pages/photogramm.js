import { useState } from "react";
import PhotoCard from "../components/PhotoCard";

export default function Photogramm() {

    const [imgState, setImgState] = useState({
        src: '',
        tags: '',
        category: ''
    });

    const dbURL = 'https://my-json-server.typicode.com/taiabereza/quiz-questions/db';
    fetch(dbURL)
    .then(resonse => resonse.json())
    .then(data => {
        const currentCategory = 'christmas';
        const photoDB = data.photogramm[currentCategory];
        setImgState({
            ...imgState,
            src: photoDB[3].src,
            tags: photoDB[3].tags,
            category: currentCategory,
        })
    })

    return (
        <div className="page page-photogramm">
            <header>
                <h1>PHOTOGRAMM</h1>
            </header>

            
            <PhotoCard imgSrc={imgState.src} />
        </div>
    )
}