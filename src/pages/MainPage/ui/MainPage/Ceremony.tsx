import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import photo1 from '../../../../shared/assets/photo1.png';
import drink from '../../../../shared/assets/drink.png';
import ceremony from '../../../../shared/assets/ceremony.png';

export const Ceremony = () => {
    const drinkRef = useRef<HTMLImageElement>(null);
    const ceremonyRef = useRef<HTMLImageElement>(null);
    const drinksTextRef = useRef<HTMLDivElement>(null);
    const ceremonyTextRef = useRef<HTMLDivElement>(null);
    const timeRef1 = useRef<HTMLDivElement>(null);
    const timeRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        // Анимация изображения напитка
        tl.fromTo(
            drinkRef.current,
            { scale: 0.8, opacity: 0 }, // Начальное состояние
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power1.inOut' },
        )
            .fromTo(
                drinksTextRef.current,
                { y: -30, opacity: 0, rotation: -10 }, // Начальное состояние текста напитков
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
                { y: -20, opacity: 0 }, // Начальное состояние времени
                { y: 0, opacity: 1, duration: 1.5, ease: 'power1.inOut' },
                '<', // Начинаем анимацию времени одновременно с анимацией напитков
            )
            .fromTo(
                ceremonyTextRef.current,
                { y: -30, opacity: 0, rotation: 10 }, // Начальное состояние текста церемонии
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
                { y: -20, opacity: 0 }, // Начальное состояние времени
                { y: 0, opacity: 1, duration: 1.5, ease: 'power1.inOut' },
                '<', // Начинаем анимацию времени одновременно с анимацией церемонии
            )
            .fromTo(
                ceremonyRef.current,
                { scale: 0.8, opacity: 0 }, // Начальное состояние
                { scale: 1, opacity: 1, duration: 2, ease: 'power1.inOut' },
            );

        return () => {
            // Остановка анимации при размонтировании
            gsap.killTweensOf([
                drinkRef.current,
                ceremonyRef.current,
                drinksTextRef.current,
                ceremonyTextRef.current,
                timeRef1.current,
                timeRef2.current,
            ]);
        };
    }, []);

    return (
        <div
            className="bg-[#e1d9d4] py-5 px-10 flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${photo1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                overflow: 'hidden',
            }}
        >
            <img ref={drinkRef} src={drink} width={300} className="pb-5" />
            <div
                ref={drinksTextRef}
                className="text-[24px] font-parisienne text-center"
            >
                Drinks
            </div>
            <div
                ref={timeRef1}
                className="font-sans text-center pt-1 font-semibold"
            >
                18:00
            </div>
            <div
                ref={ceremonyTextRef}
                className="text-[24px] pt-5 font-parisienne text-center"
            >
                Ceremony
            </div>
            <div
                ref={timeRef2}
                className="font-sans text-center pt-1 pb-5 font-semibold"
            >
                19:00
            </div>
            <img ref={ceremonyRef} src={ceremony} width={300} />
        </div>
    );
};
