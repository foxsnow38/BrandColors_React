
import Search from './Search';
import MainContext from '../MainContext';
import Brands from './Brands';
import {useContext} from'react'
import LazyLoad from 'react-lazyload';
import Download from './Download';

function Content(props) {   
 const {brands, selectedBrands} = useContext(MainContext)

    return (
        <main className='content'>
            <header className="header">
                <Search />
{selectedBrands.length !==0 && <Download/>}
            </header>
            
            <section className='brands'>
            <LazyLoad key={brands.slug} once={true} overflow={true} placeholder={'Loading...'}>
            {brands.map(brand =>(<Brands brand={brand}/>))}

            </LazyLoad>


              
               
            </section>
        </main>
    )

}
export default Content;