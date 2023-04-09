import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

// thư viện animation scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import Gallery from './pages/gallery/Gallery';
import GalleryLayout from './layouts/GalleryLayout';
const override = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    // chỗ chỉnh aos :V
    Aos.init({
      duration: 2000,
      delay: 200,
      // once: true,
      once: false,
    });
  }, []);
  // Set up ảnh cho gallery
  const galleryImages = [
    {
      img: 'https://i.ibb.co/wKJG4Kt/MG-1255.jpg'

    },
    {
      img: 'https://i.ibb.co/qjLfGTT/MG-1260.jpg'

    },
    {
      img: 'https://i.ibb.co/tCQP7k9/MG-1266.jpg'

    },
    {
      img: 'https://i.ibb.co/rdbzkHF/MG-1269.jpg'

    },
    {
      img: 'https://i.ibb.co/R4wvkBy/MG-1283.jpg'

    },
    {
      img: 'https://i.ibb.co/bHxs4qK/MG-1288.jpg'

    },
    {
      img: 'https://i.ibb.co/Ybpj2BB/MG-1274.jpg'

    },
    {
      img: 'https://i.ibb.co/s6Z08vC/MG-1280.jpg'

    },
    {
      img: 'https://i.ibb.co/xfpfF5N/MG-1320.jpg'

    },
    {
      img: 'https://i.ibb.co/TbLNtsP/MG-1321.jpg'
    },
    {
      img:'https://i.ibb.co/8gjhM9m/MG-1344.jpg'
    },
    {
      img:'https://i.ibb.co/cXZnNx1/MG-1334.jpg'
    },
    {
      img:'https://i.ibb.co/6gJWH2b/MG-1385.jpg'
    },
    {
      img:'https://i.ibb.co/zGhqKHs/MG-1370.jpg'
    },
    {
      img:'https://i.ibb.co/Xydj4W5/MG-1388.jpg'
    },
    {
      img:'https://i.ibb.co/J5GB0kk/MG-1392.jpg'
    },
    {
      img:'https://i.ibb.co/JrV7dWF/MG-1395.jpg'
    },
    {
      img:'https://i.ibb.co/6WQfL5x/MG-1408.jpg'
    },
    {
      img:'https://i.ibb.co/2M7r1Nk/MG-1397.jpg'
    },
    {
      img:'https://i.ibb.co/S5KrZd8/MG-1405.jpg'
    },
    {
      img:'https://i.ibb.co/ZMwmrsZ/MG-1418.jpg'
    },
    {
      img:'https://i.ibb.co/dJzy5gY/DSC-1106.jpg'
    },
  ]
  return (
    <Router>
      {loading ? (
        <SyncLoader color="#d32f2fd6" cssOverride={override} />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryLayout>
                <Gallery galleryImages={galleryImages} />
              </GalleryLayout>
            }
          />
          <Route
            path="*"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
