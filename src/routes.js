import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import NotFound from "./pages/NotFound/NotFound"
import Cabecera from "./components/Cabecera/Cabecera"
import Footer from "./components/Footer/Footer"
import NuevoVideo from "./pages/NuevoVideo/NuevoVideo"
import VerVideo from "./components/VerVideo/VerVideo"
import { getVideos } from "./services/apiService"
import { useState, useEffect } from "react"
import Player from "./pages/Player/Player"

const AppRoutes = () =>{

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const videosData = await getVideos();
            setVideos(videosData);
        };

        fetchVideos();
    }, []);

    const agregarVideo = (newVideo) => {
        setVideos(prevVideos => [...prevVideos, newVideo]);
    };

    return(
        <BrowserRouter>
            <Cabecera />
                    
            <Routes>
                <Route path="/" element={<Inicio videos={videos} setVideos={setVideos} />}/>
                <Route path="/videos/:id" element={<VerVideo />} />
                <Route path=":id" element={<Player />} />
                <Route path="*" element={<NotFound />}/>
                <Route path="/nuevo-video" element={<NuevoVideo agregarVideo={agregarVideo}/>} />
            </Routes>
            
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes