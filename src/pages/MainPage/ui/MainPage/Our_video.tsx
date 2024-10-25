import photo3 from '../../../../shared/assets/photo4.png';
import { motion } from 'framer-motion';
import { VideoPlayerComponent } from './VideoPlayerComponent';

export const Our_video = () => {
    return (
        <motion.div
            className="px-10 py-5  bg-no-repeat bg-right-top bg-[#fffbfb]"
            style={{
                backgroundImage: `url(${photo3})`,
            }}
            animate={{
                backgroundSize: ['20%', '45%', '20%'], // Увеличиваем и уменьшаем размер
            }}
            transition={{
                duration: 8, // Продолжительность одного цикла
                repeat: Infinity, // Бесконечное повторение
                ease: 'easeInOut', // Плавное движение
            }}
        >
            <div className="text-[34px] font-parisienne pt-8 text-center">
                Our Video
            </div>
            <div className="text-[14px] font-sans text-center pt-8 flex flex-col justify-center">
                <VideoPlayerComponent />
            </div>
        </motion.div>
    );
};
