import { faLocationDot, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import flowerTop from '../../../../shared/assets/flower.png';
import flowerBottom from '../../../../shared/assets/flowerBottom.png';

export const Version_1 = () => {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
            {/* Верхнее изображение */}
            <div className="absolute top-0 w-full max-w-xs">
                <img
                    src={flowerTop}
                    className="w-full h-auto"
                    alt="Flower Top"
                />
            </div>

            {/* Основной контент */}
            <div className="z-10 text-center px-4 py-8 flex flex-col font-qwitcher text-pink-950">
                <div className="text-8xl">Arial + Shrifts</div>
                <div className=" text-5xl font-semibold mb-5">
                    November 06 2024 18:00
                </div>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                </div>
                <div className="text-5xl font-semibold mb-8">
                    Address takoy to takoy
                </div>
                <div className="flex justify-center items-center bg-pink-200 h-44 rounded-xl">
                    <div className="bg-black/50 w-14 h-14 flex justify-center items-center rounded-full">
                        <FontAwesomeIcon icon={faPlay} className="text-white" />
                    </div>
                </div>
            </div>

            {/* Нижнее изображение */}
            <div className="absolute bottom-0 w-full max-w-xs">
                <img
                    src={flowerBottom}
                    className="w-full h-auto"
                    alt="Flower Bottom"
                />
            </div>
        </div>
    );
};
