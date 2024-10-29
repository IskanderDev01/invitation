import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import audioFile from '../../../../shared/assets/music.mp3'; // Убедитесь, что путь правильный

const ControlsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Button = styled.button`
    background-color: #9d8280;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #7b6e6c;
    }
`;

const AudioPlayer = () => {
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(true); // Начинаем воспроизведение при загрузке страницы
    }, []);

    const togglePlay = () => {
        setPlaying((prev) => !prev); // Переключаем состояние воспроизведения
    };

    return (
        <div className="bg-transparent fixed z-50 right-5 bottom-16 rounded-full">
            <ControlsContainer>
                <Button onClick={togglePlay}>
                    <FontAwesomeIcon icon={playing ? faStop : faPlay} />
                </Button>
            </ControlsContainer>
            <ReactPlayer
                url={audioFile}
                playing={playing}
                loop
                width="0"
                height="0"
            />
        </div>
    );
};

export default AudioPlayer;
