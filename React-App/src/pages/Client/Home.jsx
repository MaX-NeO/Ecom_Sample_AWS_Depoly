import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
const Home = () => {



    return (

        <div className='main'>
            <Navbar/>

                <div className='home-container'>
                    <div className='home-l'>
                        <p className='home-title primary'>Home title </p>
                        <p className='home-data'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                        </p>
                    </div>
                    <div className='home-r'>
                        <img src='https://ik.imagekit.io/nodehive/hive/illustratorx/Startup_SVG_css.svg' className='home-r-img'/>
                    </div>

                </div>

            <Footer/>
        </div>
    )
}
export default Home;
