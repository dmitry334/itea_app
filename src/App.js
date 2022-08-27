import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Popular from './components/Popular';
import Battle from './components/Battle';
import PageNotFound from "./components/PageNotFound";

const App = () => {

  return (
      <div className='container'>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='popular' element={<Popular />} />
            <Route path='battle' element={<Battle />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  );
}
export default App;