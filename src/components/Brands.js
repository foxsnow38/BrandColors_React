//import {useState} from 'react'
import getContrastYIQ from '../helpers';
import MainContext from '../MainContext';
import  {useContext} from 'react'
import Clipboard from 'react-clipboard.js';
export default function Brands({brand}) {
    
  const {setSelectedBrands,selectedBrands,setCopied} = useContext(MainContext);
  const toggleSelected = () => {
if (selectedBrands.includes(brand.slug)){
  
  setSelectedBrands(selectedBrands.filter(slug=> slug !== brand.slug ))}
  else{
    setSelectedBrands([...selectedBrands,brand.slug])
  }

}
const setColor = (c) =>{
setCopied(c)
}

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : '' }`}>

          <h5 onClick={toggleSelected}>{brand.title}</h5>
          <div className="brand-colors">
            {brand.colors.map(color =>(
              <Clipboard onSuccess={() => setColor(color)} data-clipboard-text={'#'+color} component='span' style={{'--bgColor': `#${color}`,'--textColor': `${getContrastYIQ(color)}`}}>
{color}
              </Clipboard>
              
            ))}
          </div>
        </div>
    )
}
