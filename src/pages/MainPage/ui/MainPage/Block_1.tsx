import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import photo2 from '../../../../shared/assets/photo2.png';
import gsap from 'gsap';

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
            <div className="pt-5 flex flex-col justify-center">
                <div
                    ref={joinUsRef}
                    className="font-sans text-center text-[14px]"
                >
                    Join us for
                </div>
                <div
                    ref={weddingOfRef}
                    className="font-parisienne pt-2 text-center text-[24px]"
                >
                    the wedding of
                </div>
            </div>
            <motion.div
                className="font-parisienne text-[34px] h-[450px] bg-center bg-no-repeat bg-contain flex flex-col justify-center items-center"
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
                <div ref={ashleyRef}>Ashlie</div>
                <span className="text-[14px] font-sans">to</span>
                <div ref={gregoryRef}>Gregory</div>
            </motion.div>
            <div className="px-10 flex flex-col justify-center items-center pt-14 pb-10">
                <div className="text-[24px] font-parisienne wedding-details">
                    September 10 2024
                </div>
                <div className="text-[14px] font-sans pt-4 wedding-details">
                    at six o'clock in the evening
                </div>
                <div className="pt-5 text-[14px] font-sans wedding-details">
                    7018 Dewy Deer Campus, Prussia, New York
                </div>
                <div className="pt-5 text-[14px] font-sans wedding-details">
                    *by August 20th
                </div>
            </div>
        </div>
    );
};
