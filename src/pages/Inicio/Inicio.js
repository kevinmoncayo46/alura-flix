import { useEffect, useState } from 'react'
import styles from './Inicio.module.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import CardTitle from '../../components/CardTitle/CardTitle';
import { getCategorias, getVideos, borrarVideo, obtenerUltimoVideo } from '../../services/apiService';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;

const Inicio = ({ videos, setVideos }) => {

    const [ultimoVideo, setUltimoVideo] = useState(null);

    useEffect(() =>{
        obtenerUltimoVideo()
        .then(data => {
            setUltimoVideo(data);
        })
        .catch(error => {
            console.error('Error fetching latest video:', error)
        })
    })

    const handleDelete = async (id) => {
        try {
            await borrarVideo(id);
            setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    }

    // const [videos, setVideos] = useState([])
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const categoriasData = await getCategorias();
                setCategorias(categoriasData);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategorias();
    }, []);


    useEffect(() => {
        console.log('Videos received in Inicio:', videos);
    }, [videos]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };



    return(

        <>
        <Banner/>
        
            
            {categorias.map(categoria => {
                const videosCategoria = videos.filter(video => video.categoria.toLowerCase() === categoria.nombre.toLowerCase());
                return (
                    <section key={categoria.id} className={styles.section}>
                        <div className={styles.contTitle}>
                            <CardTitle colorFondo={categoria.color}>{categoria.nombre}</CardTitle>
                        </div>
                        <div className={styles.container}>
                        <Slider {...settings}>
                            {videosCategoria.map(video => (
                                <Card key={video.id} {...video} categoriaColor={categoria.color} onDelete={handleDelete} />
                            ))}
                        </Slider>
                        </div>

                    </section>
                );
            })}
        </>
    )
}

export default Inicio