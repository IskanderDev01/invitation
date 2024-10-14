import photo1 from '../../../../shared/assets/photo1.png';
import drink from '../../../../shared/assets/drink.png';
import ceremony from '../../../../shared/assets/ceremony.png';
import { motion } from 'framer-motion';

export const Ceremony = () => {
    return (
        <motion.div
            className="bg-[#e1d9d4] py-5 px-10 flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${photo1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
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
            <img src={drink} width={300} className="pb-5" />
            <div className="text-[24px] font-parisienne text-center">
                Drinks
            </div>
            <div className="font-sans text-center pt-1 font-semibold">
                18:00
            </div>
            <div className="text-[24px] pt-5 font-parisienne text-center">
                Ceremony
            </div>
            <div className="font-sans text-center pt-1 pb-5 font-semibold">
                19:00
            </div>
            <img src={ceremony} width={300} />
        </motion.div>
    );
};
