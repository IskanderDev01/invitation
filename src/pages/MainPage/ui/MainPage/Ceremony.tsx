import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import photo1 from '../../../../shared/assets/photo1.png';
import drink from '../../../../shared/assets/drink.png';
import ceremony from '../../../../shared/assets/p1.jpg';

export const Ceremony = () => {
    const drinkRef = useRef<HTMLImageElement>(null);
    const ceremonyRef = useRef<HTMLImageElement>(null);
    const drinksTextRef = useRef<HTMLDivElement>(null);
    const ceremonyTextRef = useRef<HTMLDivElement>(null);
    const timeRef1 = useRef<HTMLDivElement>(null);
    const timeRef2 = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });

        // Анимация изображения напитка
        tl.fromTo(
            drinkRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power1.inOut' },
        )
            .fromTo(
                drinksTextRef.current,
                { y: -30, opacity: 0, rotation: -10 },
                {
                    y: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: 'power1.inOut',
                },
            )
            .fromTo(
                timeRef1.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: 'power1.inOut' },
                '<',
            )
            .fromTo(
                ceremonyTextRef.current,
                { y: -30, opacity: 0, rotation: 10 },
                {
                    y: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: 'power1.inOut',
                },
            )
            .fromTo(
                timeRef2.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: 'power1.inOut' },
                '<',
            )
            .fromTo(
                ceremonyRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: 'power1.inOut' },
            );

        // IntersectionObserver для запуска анимации при прокрутке
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        tl.play(); // Запускаем анимацию
                        observer.disconnect(); // Отключаем наблюдатель
                    }
                });
            },
            { threshold: 0.1 },
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            tl.kill();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-[#e1d9d4] py-5 text-2xl pb-10 flex flex-col justify-center items-center bg-animation"
            style={{
                backgroundImage: `url(${photo1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                overflow: 'hidden',
            }}
        >
            <img
                ref={drinkRef}
                src={drink}
                width={300}
                className="pb-5 rounded-lg"
            />
            <div ref={drinksTextRef} className="text-[24px] text-center">
                Начало
            </div>
            <div ref={timeRef1} className="text-center pt-1 font-semibold">
                18:00
            </div>
            <div ref={ceremonyTextRef} className="text-[24px] pt-5 text-center">
                Церемония
            </div>
            <div ref={timeRef2} className="text-center pt-1 pb-5 font-semibold">
                19:00
            </div>
            <img
                ref={ceremonyRef}
                src={ceremony}
                width={300}
                className="rounded-lg bg-[#9D8280]"
            />
        </div>
    );
};
