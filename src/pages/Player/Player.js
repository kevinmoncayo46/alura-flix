import styles from './Player.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

const Player = () => {
    
    const [video, setVideo] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch(`http://localhost:5000/posts/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setVideo(data);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideo();
    }, [id]);

    if (!video) {
        return <NotFound />
    }

    return(
        <>
            <section className={styles.iframeContainer}>

            <iframe
                    width="100%"
                    height="500"
                    src={video.url}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

            </section>
        </>
    )
}

export default Player