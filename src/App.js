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
      img: 'https://i.ibb.co/WBQ1j1r/MG-1580-min.jpg'

    },
    {
      img: 'https://i.ibb.co/mh480SP/MG-1305-min.jpg'

    },
    {
      img: 'https://i.ibb.co/XWQ944J/MG-1370-min.jpg'

    },
    {
      img: 'https://i.ibb.co/Vxr2m9L/MG-1397-min.jpg'

    },
    {
      img: 'https://i.ibb.co/hLBjf6H/MG-2205-min.jpg'
    },
    {
      img: 'https://i.ibb.co/R9vdGQQ/MG-2220-min.jpg'
    },
    {
      img: 'https://i.ibb.co/fDp7FcK/IMG-0893-min.jpg'
    },
    {
      img: 'https://i.ibb.co/jHb7w4h/DSC-1063-min.jpg'
    },
    {
      img: 'https://i.ibb.co/dW2yG2c/IMG-0852-min.jpg'
    },
    {
      img: 'https://i.ibb.co/3mgx0fn/DSC-1208-min.jpg'
    },
    {
      img: 'https://i.ibb.co/S0DkKS3/IMG-0872-min.jpg'
    },
    {
      img: 'https://i.ibb.co/fvqs6Kr/IMG-0896-min.jpg'
    },
    {
      img: 'https://i.ibb.co/18hm5B4/MG-2410-min.jpg'

    },
    {
      img: 'https://i.ibb.co/g6Dw7QZ/MG-1503-min.jpg'

    },
    {
      img: 'https://i.ibb.co/7xcgrJV/MG-1547-min.jpg'

    },
    {
      img: 'https://i.ibb.co/tx4gfYL/MG-1481-min.jpg'

    },
    {
      img: 'https://i.ibb.co/1nH9VVp/MG-1714-min.jpg'
    },
    {
      img: 'https://i.ibb.co/ZfqFJWt/MG-1749-min.jpg'
    },
    {
      img: 'https://i.ibb.co/GVvPh60/MG-1799-min.jpg'
    },
    {
      img: 'https://i.ibb.co/FDgXfCw/MG-1873-min.jpg'
    },
    {
      img: 'https://i.ibb.co/sC8NrQY/MG-1888-min.jpg'
    },
    {
      img: 'https://i.ibb.co/Mgykzvt/MG-1899-min.jpg'
    },
    {
      img: 'https://i.ibb.co/J2SHJ2s/MG-1892-min.jpg'
    },
    {
      img: 'https://i.ibb.co/dD06Zbm/MG-1950-min.jpg'
    },
    {
      img: 'https://i.ibb.co/kJfZBTF/MG-1925-min.jpg'
    },
    {
      img:'https://i.ibb.co/7ysvzV5/MG-2116-min.jpg'
    },
    {
      img: 'https://i.ibb.co/wJyVCr2/MG-2415-min.jpg'
    },
    {
      img: 'https://i.ibb.co/9vyVcnd/MG-2223-min.jpg'
    },
    {
      img: 'https://i.ibb.co/xD0kCf6/MG-1560-min.jpg'
    },
    {
      img: 'https://i.ibb.co/PT2zWPK/MG-2379-min.jpg'
    },
    {
      img:'https://i.ibb.co/884XWvg/MG-2466-min.jpg'
    },
    {
      img:'https://i.ibb.co/WtsJgX1/MG-2468-min.jpg'
    },
    {
      img:'https://i.ibb.co/jyMQjdb/MG-2383-min.jpg'
    },
    {
      img:'https://i.ibb.co/rkRD4q0/IMG-0838-min.jpg'
    },
    {
      img:'https://i.ibb.co/KwMCDkF/MG-2561-min.jpg'
    },
    {
      img:'https://i.ibb.co/b2jWRD0/MG-2592-min.jpg'
    }
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
