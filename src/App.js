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
  const galleryImages = [
    {
      img: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/339482180_965420851291246_1482668359409543491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=cALWaRognBIAX-Cd2qs&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAbiFUZiAkWDzp6acBExcnD8WXr1QC6BAA-TkjGXnCIog&oe=642FDFB9'

    },
    {
      img: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/339500190_233314825854330_2356029545886391694_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=BtZkEisWHewAX8ZkfIZ&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDGtBEmVjRlZLZ1Nf4Suwnr99GNNXPji5jyJSFwPb2ytw&oe=6430705C'

    },
    {
      img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/339492442_755501575972734_7868647804056324958_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=n34AmhMlQZMAX-tpiio&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC0YffYhDLvyhscRwen_81WMlchEw6jS4E_jjX9P8ffTA&oe=642FA63B'

    },
    {
      img: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/339649089_557551463142111_2413563980313876837_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=5ngZI85s7toAX-9TwvJ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDpydQCNJkmlIkNZ88rBetNyz6DoQwOR4iyLNyOMDCK_g&oe=64305E4D'

    },
    {
      img: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/339620313_593202809521749_7497780862611706077_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=__68O4Ril9EAX-zy2UY&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBozosfKc8ASI1gRcHAR7kh_18G4kTMmwrL30k0NJvyGA&oe=6430C001'

    },
    {
      img: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/339427088_772001530856306_5284526367847611355_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=8TeMop5kngsAX8bEEoK&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfB1kr-Yksp54GPzaPM80ylC-mt3Q28GIHSyQbNfUktqYg&oe=642FFB11'

    },
    {
      img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/339654143_159848403667690_5804853392744395752_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=aBEph8hJ3eQAX9wczm2&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDRiz3AhgirXuoA9zx149LF0ec9fcL0i0lxOrRSGf3kqQ&oe=643085CD'

    },
    {
      img: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/339481537_727908219040788_7037066739663775950_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=EE7h3EVx0tEAX9MUCTs&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAYeZvISjk9pY8bCUftDm-XnwZd4vL6AMLFqYCtfvbx3A&oe=642FA7FB'

    },
    {
      img: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/339580719_439688401694424_8858489321819100661_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=evlyuSRTQvYAX-3QNjV&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAq-w6teHCXItOAWMJvtEuJaOaXaa0SZc2nuxqMJTROwQ&oe=6430432C'

    },
    {
      img: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/339487683_1141577263202878_2409064993731690682_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=oZPg_iZM9gwAX_x88AJ&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDZaQYdEgBFyh_FACNRaf8SPhZjlCH-GIxoiwMOWREIqw&oe=64306CA9'

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
