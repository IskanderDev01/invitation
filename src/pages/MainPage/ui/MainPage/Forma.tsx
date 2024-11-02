import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import videoURL from '../../../../shared/assets/video.mp4';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const InvitationForm = () => {
    const [fullName, setFullName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const messageRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const [firstName, lastName] = fullName.split(' ');

        if (!firstName || !lastName) {
            setMessage('Пожалуйста, введите свое имя и фамилию.');
            return;
        }

        try {
            await axios.post('https://www.agrar.admin.aralhub.uz/user/', {
                first_name: firstName,
                last_name: lastName,
            });
            setMessage(
                `Спасибо, ${firstName} ${lastName}! Вы приглашены на свадьбу!`,
            );
            setFullName('');

            gsap.fromTo(
                messageRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 1, ease: 'power1.out' },
            );
        } catch (error) {
            setMessage('Что-то пошло не так. Пожалуйста, попробуйте еще раз.');
        }
    };

    return (
        <div className="flex text-xl flex-col items-center justify-center py-10 px-4 bg-gradient-to-b from-[#fffbfb] to-[#e1d9d4]">
            <div className="text-center text-[28px] text-[#9D8280] mb-6">
                Оставьте ваше имя и <br /> фамилию ниже
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col justify-center items-center max-w-sm bg-transparent rounded-lg px-6"
            >
                <input
                    type="text"
                    value={fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 mb-4 text-[#9D8280] bg-[#f9f5f5] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#9D8280] transition-shadow"
                    placeholder="Введите ваше имя и фамилию"
                />

                <button
                    type="submit"
                    className="border-none w-[200px] px-4 py-3 mt-4 text-white bg-gradient-to-r from-[#9D8280] to-[#e1d9d4] rounded-lg font-semibold shadow-md hover:shadow-lg focus:outline-none transition-all duration-300 transform hover:scale-105"
                >
                    Отправить
                </button>
            </form>

            {message && (
                <div
                    ref={messageRef}
                    className="mt-6 p-4 bg-[#e1d9d4] text-[#9D8280] text-center rounded-lg shadow-lg max-w-xs"
                >
                    {message}
                </div>
            )}
            <a href={videoURL} download>
                <button
                    type="submit"
                    className="border-none w-[200px] px-4 py-3 mt-4 text-white bg-gradient-to-r from-[#9D8280] to-[#e1d9d4] rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all duration-300 transform hover:scale-105"
                >
                    скачать видео{' '}
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-[15px]"
                    />
                </button>
            </a>
        </div>
    );
};
