// import { useRef, useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import videoURL from '../../../../shared/assets/Spint1.mp4'; // Убедитесь, что путь правильный
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

// export const VideoPlayerComponent = () => {
//     const playerRef = useRef<ReactPlayer>(null); // Ссылка на видеоплеер
//     const [playing, setPlaying] = useState(true); // Состояние для воспроизведения (начальное значение true)
//     const [buttonVisible, setButtonVisible] = useState(false); // Состояние для видимости кнопки
//     const clickRef = useRef(false); // Для предотвращения многократных кликов

//     useEffect(() => {
//         // Показываем кнопку, если видео воспроизводится или на паузе
//         const timer = setTimeout(() => {
//             setButtonVisible(false); // Скрываем кнопку через 1 секунду
//         }, 1000);

//         // Сбрасываем состояние видимости кнопки при каждом изменении состояния воспроизведения
//         setButtonVisible(true);

//         return () => clearTimeout(timer);
//     }, [playing]);

//     const handlePlayPause = () => {
//         // Предотвращаем многократные клики
//         if (clickRef.current) return;
//         clickRef.current = true; // Заблокируем дальнейшие клики до завершения обработки

//         setPlaying(!playing); // Переключаем состояние воспроизведения

//         // Сбрасываем блокировку через короткий промежуток времени
//         setTimeout(() => {
//             clickRef.current = false; // Разблокируем клики
//         }, 100);
//     };

//     const handleClick = () => {
//         handlePlayPause(); // Используем общий обработчик
//     };

//     return (
//         <div className="relative bg-pink-50 overflow-hidden max-w-sm">
//             <div onClick={handleClick} className="flex justify-center">
//                 <ReactPlayer
//                     ref={playerRef}
//                     url={videoURL}
//                     width="100%"
//                     height="100%"
//                     playing={playing}
//                     controls={false} // Скрываем стандартные элементы управления
//                     loop // Цикличное воспроизведение
//                     muted // Отключаем звук для автоматического воспроизведения
//                 />
//             </div>

//             {/* Кнопка воспроизведения или паузы */}
//             {buttonVisible && (
//                 <div
//                     onClick={handlePlayPause}
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 w-14 h-14 flex justify-center items-center rounded-full"
//                 >
//                     <FontAwesomeIcon
//                         icon={playing ? faPlay : faPause}
//                         className="text-white"
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };
