import photo1 from '../../../../shared/assets/photo1.png';
import photo2 from '../../../../shared/assets/photo1.jpg';

export const Main = () => {
    return (
        <div
            style={{
                background:
                    'linear-gradient(to bottom, #e1d9d4 75%, #fffbfb 25%)',
            }}
        >
            <div
                className="text-[24px] text-center font-parisienne p-6 h-[170px] bg-contain"
                style={{
                    backgroundImage: `url(${photo1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    backgroundColor: 'transparent',
                }}
            >
                Ashlie & Gregory
            </div>
            <div className="flex justify-center -mt-[65px] bg-transparent">
                <img
                    src={photo2}
                    alt="photo"
                    width={300}
                    className="bg-transparent"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent"></div>
        </div>
    );
};
