import { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import videoURL from '../../../../shared/assets/video.mp4'; // Убедитесь, что путь правильный
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDown,
    faPause,
    faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

export const VideoPlayerComponent = () => {
    const playerRef = useRef(null); // Ссылка на видеоплеер
    const [playing, setPlaying] = useState(false); // Начальное состояние - не воспроизводится
    const [buttonVisible, setButtonVisible] = useState(false); // Состояние для видимости кнопки
    const clickRef = useRef(false); // Для предотвращения многократных кликов

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonVisible(false); // Скрываем кнопку через 1 секунду
        }, 1000);

        setButtonVisible(true);

        return () => clearTimeout(timer);
    }, [playing]);

    const handlePlayPause = () => {
        if (clickRef.current) return;
        clickRef.current = true;

        setPlaying((prev) => !prev); // Переключаем состояние воспроизведения

        setTimeout(() => {
            clickRef.current = false; // Разблокируем клики
        }, 100);
    };

    const handleClick = () => {
        if (!playing) {
            setPlaying(true); // Начинаем воспроизведение при первом клике
        } else {
            handlePlayPause(); // Переключаем воспроизведение при последующих кликах
        }
    };

    return (
        <>
            <div className="relative overflow-hidden max-w-sm rounded-lg">
                <div onClick={handleClick} className="flex justify-center">
                    <ReactPlayer
                        ref={playerRef}
                        url={videoURL}
                        width="100%"
                        height="100%"
                        playing={playing}
                        controls={false} // Скрываем стандартные элементы управления
                        loop // Цикличное воспроизведение
                        // Убрали muted для включения звука
                    />
                </div>

                {buttonVisible && (
                    <div
                        onClick={handlePlayPause}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 w-14 h-14 flex justify-center items-center rounded-full"
                    >
                        <FontAwesomeIcon
                            icon={playing ? faPause : faPlay}
                            className="text-white"
                        />
                    </div>
                )}
            </div>
            <a href={videoURL} download>
                <Button className="mt-2 bg-[#9D8280] text-white py-5">
                    Download <FontAwesomeIcon icon={faArrowDown} />
                </Button>
            </a>
        </>
    );
};
