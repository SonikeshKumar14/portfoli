import React from 'react'
import { fadeIn, staggerChildren } from '../../utils/motion'
import css from './Portfolio.module.scss'
import {motion} from 'framer-motion'



const Portfolio = () => {

  const handleImageClick = (url) => {
    window.location.href = url;
  };

  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
        <div className={`innerWidth flexCenter ${css.container}`}>
           <div className={`flexCenter ${css.heading}`}>
            <div>
                <span className='primaryText'>My Latest Works</span>
                <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
            </div>
            <span className='secondaryText'>Explore More Works</span>
           </div>

           {/* images */}
           <div className={`flexCenter ${css.showCase}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase1.png"
            alt="project"
            onClick={()=> handleImageClick('https://6409d7a4fff70c005292f2a7--velvety-arithmetic-a2788c.netlify.app/')}
            />
            <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="project"
            onClick={()=> handleImageClick('https://sonikeshkumar14.github.io/food-order-app/')}
            />
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase3.png"
            alt="project"
            onClick={()=> handleImageClick('https://sonikeshkumar14.github.io/ebook/')}
            />
            <motion.img
            variants={fadeIn("up", "tween", 0.8, 0.6)}
            src="./showCase4.png"
            alt="project"
            onClick={()=> handleImageClick('https://netflix-clone-9f83e.web.app/')}
            />
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase5.png"
            alt="project"
            onClick={()=> handleImageClick('https://64c7c70be9c47e0b1393a902--leafy-manatee-f6226c.netlify.app/')}
            />
           </div>
        </div>
    </motion.section>
  )
}

export default Portfolio