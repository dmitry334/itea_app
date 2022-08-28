import { Routes, Route } from 'react-router-dom';

import Nav from './components/pages/General/Nav';
import Home from './components/pages/General/Home';
import Popular from './components/pages/Popular/Popular';
import Battle from './components/pages/Battle/Battle';
import Results from './components/pages/Battle/Results';
import PageNotFound from "./components/pages/General/PageNotFound";

const App = () => {

  return (
      <div className='container'>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='popular' element={<Popular />} />
            <Route path='battle' element={<Battle />} />
            <Route path='battle/results' element={<Results />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  );
}
export default App;