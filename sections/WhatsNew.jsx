'use client';

import { motion } from 'framer-motion'
import { TypingText, TitleText, NewFeatures } from '../components';
import styles from '../styles'
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion'
import { newFeatures } from '../constants';

const  WhatsNew = () => (
  <section classNames={`relative z-10 ${styles.paddings}`}>
    <motion.div variants={staggerContainer} initial="hidden"
    whileInView="show" viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex 
    lg:flex-row flex-col gap-8`}>
      
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col">
          
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaversus</>} />
          
        <div className="mt-[48px] flex flex-wrap justify-between 
        gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature}/>
          ))}
        </div>

      </motion.div>

      <motion.div variants={planetVariants('right')}
      className={`${styles.flexCenter} flex-1`}>
        <img src="/whats-new.png" alt="what's new"
        className="w-[90%] h-[90%] object-contain"/>
      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
