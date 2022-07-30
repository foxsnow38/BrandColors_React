import { useState } from "react";
import Modal from 'react-modal'
import {AiOutlineClose} from "react-icons/ai";

function Sidebar(props) {
const [modalIsOpen, setmodalIsOpen] = useState(false)
const toggleModal = () => {
    setmodalIsOpen(!modalIsOpen);
}


    return (
        <>
           <aside className="sidebar">
           <div className="logo">
                <a>Brand <b>Colors</b> </a>

            </div>
            <div className="description">
                The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
            </div>
            <div className="menu">
                <ul>
                    <li>


                    <a  onClick={toggleModal} >About Brand Colors</a>
                    </li>

                </ul>
            </div>
           </aside>

           <Modal
        isOpen={modalIsOpen}

        onRequestClose={toggleModal}
     
        contentLabel="Example Modal"
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
     
        <button onClick={toggleModal} className='modal-close-button'><AiOutlineClose></AiOutlineClose></button>
        <h3>About BrandColors</h3>
        <br />
        <br />
        <p>BrandColors was created by <b> DesignBombs.</b> The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
        <br /><br />
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <b> 2 million pageviews. </b> There are now over <b> 600 brands</b> with <b> 1600 colors </b>and the collection is always growing.</p>

      </Modal>
   

        </>
    )
}
export default Sidebar;