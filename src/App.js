import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import './App.css';
import { useState, useEffect } from 'react'
import BrandsData from './brands.json';
import Copied from './components/Copied';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Collection from './components/Collection';

function App() {
  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })
  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')
  const data = {
    brands,
    setSelectedBrands,
    selectedBrands,
    setCopied,
    search,
    setSearch
  };
  useEffect(() => { }, [selectedBrands])
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 3000);
    }
  }, [copied])
  useEffect(() => {
    setBrands(brandsArray.filter(b => b.title.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  return (

    <>

      <MainContext.Provider value={data}>
        {copied && < Copied color={copied} />}
        <Sidebar />
        <BrowserRouter>
          <Switch>
            
          <Route path='/collections/:slugs'>
              <Collection />
            </Route>

          <Route path='/' exact>
              <Content />
            </Route>  

           


          </Switch>

        </BrowserRouter>
      </MainContext.Provider>

    </>

  );
}

export default App;
