import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button, message } from 'antd';

export const DownloadPage = () => {
    const handleDownload = async () => {
        try {
            const response = await axios.get(
                'https://www.agrar.admin.aralhub.uz/user/download/',
                {
                    responseType: 'blob', // Указываем, что ожидаем бинарные данные
                },
            );

            // Создаем объект URL для скачивания
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'guests_list.xlsx'); // Указываем имя файла
            document.body.appendChild(link);
            link.click(); // Имитируем клик по ссылке для скачивания
            link.remove(); // Удаляем ссылку из документа
        } catch (error) {
            message.error('Ошибка при скачивании файла'); // Сообщаем об ошибке
            console.error(error);
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <Button onClick={handleDownload}>
                Скачать список гостей <FontAwesomeIcon icon={faArrowDown} />
            </Button>
        </div>
    );
};
