import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import Blogs from './Componants/Blogs/Blogs';
import Dashboard from './Componants/Dashboard/Dashboard';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import NotFound from './Componants/NotFound/NotFound';
import Reviews from './Componants/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
