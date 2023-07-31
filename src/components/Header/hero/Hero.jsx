import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion'; 
import { fadeIn, slideIn, staggerContainer } from '../../../utils/motion';

const Hero = () => {
    return(
        <section className={`paddings ${css.wrapper}`}>
             <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.25 }}
             className={`innerWidth ${css.container}`}>
                {/* upper elements */}
                <div className={css.upperElements}>  
                    <motion.span 
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className='primaryText'>
                        Hey There, <br/> I'm Sonikesh.
                    </motion.span>
                    <motion.span 
                    variants={fadeIn("left", "tween", 0.4, 1)}
                    className='secondaryText'>
                        I design beautiful simple
                        <br/>
                        things, And I love what i do
                    </motion.span>
                </div>
                   
                {/*person image */}
                <motion.div 
                variants={fadeIn("up", "tween", 0.3, 1)}
                className={css.person}>
                    <motion.img
                    variants={slideIn("up", "tween", 0.5, 1.3)}
                     src="./person.png" alt="" />
                </motion.div>

                <a className={css.email} href="mailto:sanikeshkumar14@gmail.com">
                    sanikeshkumar14@gmail.com
                </a>
                {/*lower elements */}
                <div className={css.lowerElements}>
                    <motion.div
                     variants={fadeIn("right", "tween", 0.3, 1)}
                     className={css.experience}>
                        <div className="primaryText">2</div>
                        <div className="secondaryText">
                            <div>
                                Years
                            </div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div
                     variants={fadeIn("left", "tween", 0.5, 1)}
                     className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>MERN STACK DEVELOPMENT</span>
                        <span></span>
                    </motion.div>
                </div>
             </motion.div>
        </section>
    )
}

export default Hero;