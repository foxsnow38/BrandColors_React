import React, { useEffect, useState } from 'react'
import MainContext from '../MainContext'
import { useContext } from 'react'
import {FiLink} from 'react-icons/fi'
import {MdArrowForward, MdFileDownload} from 'react-icons/md'
import {GrClose} from 'react-icons/gr'
 
export default function Download() {
    const {selectedBrands,setSelectedBrands,brands} =useContext(MainContext)
    const[dowlandUrl,setDowlandUrl] = useState()
    const[cssMethod,setCssMethod] = useState()
    const getLink = () =>{
        prompt('This Url Babe',`http://localhost:3000/collections/${selectedBrands.join(',')}`)
    }
    useEffect(() => {
        if (selectedBrands.length>0){
            let output ='';
            // eslint-disable-next-line default-case
            switch(cssMethod){
                case 'css':
                    // eslint-disable-next-line array-callback-return
                    selectedBrands.map(slug=>{
                        let brand = brands.find(brand => brand.slug ===slug)
                        
                    // eslint-disable-next-line array-callback-return
                    brand.colors.map((color,key) => {
                        output += `--${slug}-${key}:#${color};\n`
                    })
                        
                    })
                    break;
                    case 'scss':
                        // eslint-disable-next-line array-callback-return
                        selectedBrands.map(slug=>{
                            let brand = brands.find(brand => brand.slug ===slug)
                            
                        // eslint-disable-next-line array-callback-return
                        brand.colors.map((color,key) => {
                            output += `\$${slug}-${key}:#${color};\n`
                        })
                            
                        })
                        break;
                        case 'less':
                            selectedBrands.map(slug=>{
                                let brand = brands.find(brand => brand.slug ===slug)
                                
                            brand.colors.map((color,key) => {
                                output += `@${slug}-${key}:#${color};\n`
                            })
                                
                            })
                            break;
            }
            
           
           
            const blob = new Blob([output])
          const url =(URL.createObjectURL(blob))
          setDowlandUrl(url)
        return () =>{
            URL.revokeObjectURL(url)
            setDowlandUrl('')
        }        }
    },[selectedBrands,cssMethod])
    return (
        <div className='download'>
            <div className='actions'>
            
            <a download={`brands.${cssMethod}`} href={dowlandUrl}><MdFileDownload/></a>
            <select onChange={(e)=> {setCssMethod(e.target.value)}}>
            <option value="css">CSS</option>
            <option value="scss">SCSS</option>
            <option value="less">LESS</option>
            </select>
            <button onClick={getLink}><FiLink/></button>
            
            </div>
         
            <div className='selected' onClick={()=> {setSelectedBrands([])}}>
                 <GrClose/>
            <b>{selectedBrands.length} Brands Selected.</b>
            </div>
        
        </div>
    )
}
