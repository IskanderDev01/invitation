import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import photo2 from '../../../../shared/assets/photo2.png';
import gsap from 'gsap';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Block_1 = () => {
    const blockRef = useRef<HTMLDivElement>(null);
    const joinUsRef = useRef<HTMLDivElement>(null);
    const weddingOfRef = useRef<HTMLDivElement>(null);
    const ashleyRef = useRef<HTMLDivElement>(null);
    const gregoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startAnimation();
                        observer.disconnect(); // Отключаем наблюдатель после первого срабатывания
                    }
                });
            },
            { threshold: 0.1 }, // Срабатывает, когда 10% элемента становится видимым
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => {
            if (blockRef.current) {
                observer.unobserve(blockRef.current);
            }
        };
    }, []);

    const startAnimation = () => {
        const tl = gsap.timeline();

        // Анимация для "Join us for"
        tl.fromTo(
            joinUsRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power1.out' },
        );

        // Анимация для "the wedding of"
        tl.fromTo(
            weddingOfRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power1.out' },
            '-=0.5',
        );

        // Анимация появления имен
        tl.fromTo(
            ashleyRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power1.out' },
        ).fromTo(
            gregoryRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power1.out' },
            '-=0.5',
        );

        // Плавное появление остального текста
        const weddingDetails =
            blockRef.current?.querySelectorAll('.wedding-details');
        if (weddingDetails) {
            weddingDetails.forEach((detail, index) => {
                tl.fromTo(
                    detail,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power1.out',
                        delay: index * 0.2,
                    },
                    '-=0.5',
                );
            });
        }
    };

    return (
        <div ref={blockRef} className="bg-[#fffbfb]">
            <div className="py-5 flex flex-col justify-center text-3xl">
                <div ref={joinUsRef} className="text-center">
                    Мы приглашаем вас
                </div>
                <div ref={weddingOfRef} className="pt-2 text-center">
                    на нашу свадьбу
                </div>
            </div>
            <motion.div
                className="text-[34px] h-[450px] bg-center bg-no-repeat bg-contain flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(${photo2})`,
                    backgroundSize: '145%',
                }}
                animate={{
                    backgroundSize: ['140%', '155%', '140%'], // Увеличиваем и уменьшаем размер
                }}
                transition={{
                    duration: 5, // Продолжительность одного цикла
                    repeat: Infinity, // Бесконечное повторение
                    ease: 'easeInOut', // Плавное движение
                }}
            >
                <div ref={ashleyRef}>Абай</div>
                <span className="text-[14px] font-sans">&</span>
                <div ref={gregoryRef}>Сайора</div>
            </motion.div>
            <div className="px-10 text-xl flex flex-col justify-center items-center pt-5 pb-10">
                <div className=" wedding-details text-2xl">
                    6 ноябрь в 18:00
                </div>
                <div className="pt-5 text-center text-2xl wedding-details">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="font-semibold">
                        г.Нукус улица Xожели Гузари 90А Golden Palace
                    </div>
                </div>
            </div>
        </div>
    );
};
