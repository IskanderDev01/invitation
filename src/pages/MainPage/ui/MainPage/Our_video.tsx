import { Button } from 'antd';
import photo3 from '../../../../shared/assets/photo4.png';
import { faArrowDown, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

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
                <div className="w-full bg-[#9D8280] flex justify-center items-center py-14 rounded-sm">
                    <div className="bg-black/50 w-14 h-14 flex justify-center items-center rounded-full">
                        <FontAwesomeIcon
                            icon={faPlay}
                            size="2xl"
                            className="text-white ml-1"
                        />
                    </div>
                </div>
                <Button className="mt-2 bg-[#9D8280] text-white py-5">
                    download <FontAwesomeIcon icon={faArrowDown} />
                </Button>
            </div>
        </motion.div>
    );
};
