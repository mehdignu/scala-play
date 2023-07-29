
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/paths/Home';
import ISBNSearchBar from './components/paths/ISBNSearchBar';
import ISBNSlugItem from './components/paths/ISBNSlugItem';

import useDesktopSize from './hooks/useDesktopSize';

function App() {
  const desktopSize = useDesktopSize()

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {!desktopSize ?
            <>
              <Route path="/isbn-search" element={<ISBNSearchBar />} />
              <Route path="/isbn-search/:isbn" element={<ISBNSlugItem />} />
            </>
            :
            <Route path="/isbn-search" element={<ISBNSearchBar />}>
              <Route path="/isbn-search/:isbn" element={<ISBNSlugItem />} />
            </Route>
          }
          {/*
            * I noticed late in development that mobile version needs slug
            * routing and desktop version needs nested routing
            * If i weren't limited in time by the frontend task, i would updated this. *
            */
          }
        </Routes>
      </main>
      <Footer />
    </div >
  )
}

export default App
