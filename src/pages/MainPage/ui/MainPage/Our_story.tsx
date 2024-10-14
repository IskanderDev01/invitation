import { motion } from 'framer-motion';
import photo3 from '../../../../shared/assets/photo3.png';

export const Our_story = () => {
    return (
        <motion.div
            className="px-10 py-5  bg-no-repeat bg-left-top bg-[#fffbfb]"
            style={{
                backgroundImage: `url(${photo3})`,
            }}
            animate={{
                backgroundSize: ['40%', '45%', '40%'], // Увеличиваем и уменьшаем размер
            }}
            transition={{
                duration: 5, // Продолжительность одного цикла
                repeat: Infinity, // Бесконечное повторение
                ease: 'easeInOut', // Плавное движение
            }}
        >
            <div className="text-[34px] font-parisienne pt-8 text-center">
                Our Story
            </div>
            <div className="text-[14px] font-sans text-center pt-8 flex justify-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </div>
        </motion.div>
    );
};
