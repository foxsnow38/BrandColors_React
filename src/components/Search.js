import React, { useContext } from 'react'
import  {ImSearch} from 'react-icons/im'
import MainContext from '../MainContext'
export default function Search() {
    const {search,setSearch} = useContext(MainContext)
    return (
        <div className='search'>
            <div className="icon">
                <ImSearch/>
            </div>
            <input type="text" onChange={(e)  => setSearch(e.target.value)} placeholder='Search Brands...' />
        </div>
    )
}
