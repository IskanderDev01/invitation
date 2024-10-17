import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PlayerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fffbfb;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 100%;
    transition: transform 0.3s;
`;

const InfoContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h3`
    color: #9d8280;
    font-family: 'Parisienne', cursive;
    margin: 0;
    font-size: 1.1em;
`;

const Artist = styled.p`
    color: #7b6e6c;
    font-size: 0.9em;
`;

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
    const [url] = useState('path/to/your/background-music.mp3'); // Замените на ваш путь к аудио

    const togglePlay = () => {
        setPlaying((prev) => !prev);
    };

    return (
        <PlayerContainer className="px-4 py-1 bg-transparent fixed z-50 bottom-1">
            <InfoContainer>
                <Title>Название трека</Title>
                <Artist>Исполнитель</Artist>
            </InfoContainer>
            <ControlsContainer>
                <Button onClick={togglePlay}>
                    <FontAwesomeIcon icon={playing ? faStop : faPlay} />
                </Button>
            </ControlsContainer>
            <ReactPlayer
                url={url}
                playing={playing}
                loop
                width="0"
                height="0" // Скрываем высоту плеера
            />
        </PlayerContainer>
    );
};

export default AudioPlayer;
