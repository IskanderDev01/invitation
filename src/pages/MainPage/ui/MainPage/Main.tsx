import photo1 from '../../../../shared/assets/photo1.png';
import photo2 from '../../../../shared/assets/photo1.jpg';
import { motion } from 'framer-motion';

export const Main = () => {
    const imgVariants = {
        hidden: { scale: 0.8 }, // Начальный размер (80%)
        visible: { scale: 1, transition: { duration: 1 } }, // Конечный размер (100%)
    };
    return (
        <div
            style={{
                background:
                    'linear-gradient(to bottom, #e1d9d4 75%, #fffbfb 25%)',
            }}
        >
            <motion.div
                className="text-[24px] text-center font-parisienne p-6 h-[170px] bg-contain"
                style={{
                    backgroundImage: `url(${photo1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    backgroundColor: 'transparent',
                }}
                animate={{
                    backgroundSize: ['35%', '40%', '35%'], // Увеличиваем и уменьшаем размер
                }}
                transition={{
                    duration: 5, // Продолжительность одного цикла
                    repeat: Infinity, // Бесконечное повторение
                    ease: 'easeInOut', // Плавное движение
                }}
            >
                <div className="flex justify-center items-center">
                    <motion.div
                        className="font-parisienne"
                        initial={{ opacity: 0, x: -50 }} // Исходное положение для Ashlie
                        animate={{ opacity: 1, x: 0 }} // Конечное положение
                        transition={{ duration: 1.5 }} // Плавная анимация
                    >
                        Ashlie
                    </motion.div>
                    <div className="px-2">&</div>
                    <motion.div
                        className="font-parisienne"
                        initial={{ opacity: 0, x: 50 }} // Исходное положение для Gregory
                        animate={{ opacity: 1, x: 0 }} // Конечное положение
                        transition={{ duration: 1.5 }} // Плавная анимация
                    >
                        Gregory
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className="flex justify-center -mt-[65px] bg-transparent">
                <motion.img
                    src={photo2}
                    alt="photo"
                    width={300}
                    className="bg-transparent"
                    initial="hidden" // Устанавливаем начальное состояние
                    animate="visible" // Анимируем к видимому состоянию
                    variants={imgVariants} // Применяем анимационные варианты
                />
            </motion.div>
        </div>
    );
};
