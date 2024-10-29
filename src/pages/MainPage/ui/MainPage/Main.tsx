import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import photo1 from '../../../../shared/assets/photo1.png';
import photo2 from '../../../../shared/assets/p3.jpg';
import ramka from '../../../../shared/assets/ramka2.png';

export const Main = () => {
    const textRef1 = useRef<HTMLDivElement>(null);
    const textRef2 = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Анимация текста
        const tl = gsap.timeline({ repeat: 0 }); // Устанавливаем количество повторений на бесконечное

        tl.fromTo(
            textRef1.current,
            { opacity: 0, scale: 0.6, y: -50, rotation: -10 },
            {
                opacity: 1,
                scale: 1.2,
                y: 0,
                rotation: 0,
                duration: 2.5,
                ease: 'bounce.out',
            },
        ).fromTo(
            textRef2.current,
            { opacity: 0, scale: 0.6, y: 50, rotation: 10 },
            {
                opacity: 1,
                scale: 1.2,
                y: 0,
                rotation: 0,
                duration: 2.5,
                ease: 'bounce.out',
            },
            '<',
        );

        // Анимация изображения (без повторения)
        gsap.fromTo(
            imgRef.current,
            { scale: 0.8, rotateY: 0 },
            { scale: 1, rotateY: 360, duration: 2, ease: 'power1.inOut' },
        );

        // Анимация фона с эффектом всплеска (бесконечное повторение)
        gsap.to('.bg-animation', {
            backgroundSize: '45%', // Конечный размер
            duration: 5,
            ease: 'power1.inOut',
            repeat: -1, // Бесконечное повторение
            yoyo: true, // Эффект yoyo
        });

        // Цветовая анимация фона (бесконечное повторение)
        gsap.to('.bg-animation', {
            duration: 5,
            ease: 'power1.inOut',
            repeat: -1, // Бесконечное повторение
            yoyo: true, // Эффект yoyo
        });

        return () => {
            // Удаляем анимации при размонтировании компонента
            gsap.killTweensOf([
                textRef1.current,
                textRef2.current,
                imgRef.current,
            ]);
        };
    }, []);

    return (
        <div
            className="pb-20 overflow-x-hidden overflow-y-hidden"
            style={{
                background:
                    'linear-gradient(to bottom, #e1d9d4 75%, #fffbfb 25%)',
            }}
        >
            <div
                className="text-[24px] text-center p-6 mb-5 h-[170px] bg-contain bg-animation"
                style={{
                    backgroundImage: `url(${photo1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    backgroundColor: 'transparent',
                }}
            >
                <div className="flex-col justify-center items-center">
                    <div ref={textRef1}>Калжанов Абай</div>
                    <div className="px-4">&</div>
                    <div ref={textRef2}>Салиева Сайора</div>
                </div>
            </div>
            <div className="relative flex justify-center bg-transparent">
                <img
                    ref={imgRef}
                    src={photo2}
                    alt="photo"
                    height={430}
                    className="bg-transparent rounded-full shadow-lg mt-6"
                />
                <img
                    src={ramka}
                    className="absolute h-[730px] w-[450px] -mt-32 z-999"
                />
            </div>
        </div>
    );
};
