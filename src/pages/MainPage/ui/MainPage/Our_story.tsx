import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import photo3 from '../../../../shared/assets/photo3.png';

export const Our_story = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Анимации заголовка и описания
        const titleAnimation = gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 4,
            delay: 0.5,
            repeat: 0, // Анимация проигрывается один раз
            paused: true,
        });

        const descriptionAnimation = gsap.to(descriptionRef.current, {
            opacity: 1,
            y: 0,
            duration: 4,
            delay: 1,
            repeat: 0,
            paused: true,
        });

        // Устанавливаем начальные состояния
        gsap.set(titleRef.current, { opacity: 0, y: -50 });
        gsap.set(descriptionRef.current, { opacity: 0, y: 20 });

        // Настройка IntersectionObserver для запуска анимации при прокрутке
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        titleAnimation.play();
                        descriptionAnimation.play();
                        observer.disconnect(); // Отключаем наблюдатель после первого срабатывания
                    }
                });
            },
            { threshold: 0.1 }, // Срабатывает, когда 10% элемента становится видимым
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            titleAnimation.kill();
            descriptionAnimation.kill();
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="px-10 py-5 bg-no-repeat bg-left-top bg-[#fffbfb]"
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
            <div
                ref={titleRef}
                className="text-[34px] font-parisienne pt-8 text-center"
            >
                Our Story
            </div>
            <div
                ref={descriptionRef}
                className="text-[14px] font-sans text-center pt-8 flex justify-center"
            >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </div>
        </motion.div>
    );
};
