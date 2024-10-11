import React, { useState } from 'react';
import flowersImage from '../../../../shared/assets/flowers.webp';
import { Button } from 'antd';

export const WeddingInvitation: React.FC = () => {
    const [guestName, setGuestName] = useState<string>('');
    const [guestSurname, setGuestSurname] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setGuestName(e.target.value);
    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => setGuestSurname(e.target.value);

    const handleSubmit = () => {
        // Здесь можно добавить логику отправки данных
        alert(`Спасибо за ваш ответ, ${guestName} ${guestSurname}!`);
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${flowersImage})` }}
        >
            <div className="absolute inset-0 bg-white opacity-70"></div> {/* Полупрозрачный белый слой для контраста */}
            
            <div className="relative bg-white shadow-2xl rounded-3xl p-6 sm:p-10 text-center max-w-lg z-10 border-4 border-pink-300">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-4 font-['Playfair Display']">Вы приглашены!</h1>
                <p className="text-base sm:text-lg text-gray-600 mb-6 font-['Dancing Script']">
                    Мы с радостью приглашаем вас на нашу свадьбу! Присоединяйтесь к нам в этот особенный день.
                </p>

                {/* Видео приглашение */}
                <div className="mb-6">
                    <video
                        controls
                        className="w-full rounded-lg shadow-lg"
                        src="your-video-url.mp4" // Замените на реальную ссылку на видео
                    ></video>
                    <a
                        href="your-video-url.mp4" // Замените на реальную ссылку для загрузки
                        download
                        className="text-blue-500 underline mt-2 inline-block"
                    >
                        <Button>
                            Скачать видео
                        </Button>
                    </a>
                </div>

                {/* Поля ввода для имени и фамилии */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        value={guestName}
                        onChange={handleNameChange}
                        className="w-full p-3 border-2 border-pink-300 rounded-xl mb-2 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Ваша фамилия"
                        value={guestSurname}
                        onChange={handleSurnameChange}
                        className="w-full p-3 border-2 border-pink-300 rounded-xl focus:outline-none"
                    />
                </div>

                {/* Кнопка отправки */}
                <Button
                    onClick={handleSubmit}
                    className='w-full p-5 border-2 border-pink-300 rounded-xl focus:outline-none'
                >
                    Отправить
                </Button>

                <p className="text-gray-700 mt-4">
                    Дорогой(ая) {guestName} {guestSurname}, мы с нетерпением ждем встречи с вами!
                </p>
            </div>
        </div>
    );
};
