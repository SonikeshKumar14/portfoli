import React from 'react'
import { footerVariants, staggerChildren } from '../../utils/motion';
import css from './People.module.scss';
import {motion} from 'framer-motion';
import Slider from 'react-slick';
import { comments, sliderSettings } from '../../utils/data';

const People = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>
            <div className={`flexCenter ${css.headings}`}>
                <span className="primaryText">People talk about us</span>
                <p style={{marginTop: "2rem", wordWrap: "break-word", paddingRight: "2rem"}}>I am Technology Enthusiast
                 || Desires to Spread Technology || Believes in Learning 
                 and Growing Together
                </p>
                <p>The process of submitting an application was quite cosy</p>
            </div>

            {/*carousal*/}
            <div className={`yPaddings ${css.comments}`}>
                <Slider {...sliderSettings}
                className={css.slider}>
                    {
                        comments.map((comment, i)=>{
                            return (
                                <div className={`flexCenter ${css.comment}`}>
                                    <img src={comment.img} alt="" />
                                    <p>{comment.comment}</p>

                                    <div className={css.line}></div>
                                    <div className={css.bio}>
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default People