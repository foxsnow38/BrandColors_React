import React, { useContext, useEffect } from 'react'
import { useHistory, useParams,} from 'react-router'
import { Link } from 'react-router-dom';
import MainContext from '../MainContext'
import LazyLoad from 'react-lazyload';
import Brands from './Brands'
import Download from './Download'
import { FiChevronsLeft } from 'react-icons/fi';
export default function Collection() {
   const {slugs} = useParams();
   const history = useHistory()
  const{setSelectedBrands,selectedBrands,brands} =  useContext(MainContext)
   const clearSelectedBrands = () => { 
       setSelectedBrands([])
       history.push('/')
   }
  useEffect(() => {
    setSelectedBrands(slugs.split(','))
    
},[])
  return (
        <main className='content'>
        <header className="header">
        <Link to={`/`} onClick={clearSelectedBrands}>

            <button className='back-btn'>


 < FiChevronsLeft/> All Brands
            </button>

        </Link>

{selectedBrands.length !==0 && <Download/>}
        </header>
        
        <section className='brands'>

        {selectedBrands.map(slug=> {
            let brand = brands.find(b => b.slug === slug);
            
    return(
            <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={'Loading...'}>
   <Brands brand={brand}/> 
    
            </LazyLoad>
    )
        })}

          
           
        </section>
    </main>
        
    )
}
