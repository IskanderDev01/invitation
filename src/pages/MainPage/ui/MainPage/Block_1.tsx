import photo2 from '../../../../shared/assets/photo2.png';

export const Block_1 = () => {
    return (
        <div className="bg-[#fffbfb]">
            <div className="pt-5 flex flex-col justify-center">
                <div className="font-sans text-center text-[14px]">
                    Join us for
                </div>
                <div className="font-parisienne pt-2 text-center text-[24px]">
                    the wedding of
                </div>
            </div>
            <div
                className="font-parisienne text-[34px] h-[450px] bg-center bg-no-repeat bg-contain flex flex-col justify-center items-center "
                style={{
                    backgroundImage: `url(${photo2})`,
                    backgroundSize: '145%',
                }}
            >
                Ashlie
                <span className="text-[14px] font-sans">to</span>
                Gregory
            </div>
            <div className="px-10 flex flex-col justify-center items-center pt-14 pb-10">
                <div className="text-[24px] font-parisienne">
                    September 10 2024
                </div>
                <div className="text-[14px] font-sans pt-4">
                    at six o'clock in the evening
                </div>
                <div className="pt-5 text-[14px] font-sans">
                    7018 Dewy Deer Campus, Prussia, New York
                </div>
                <div className="pt-5 text-[14px] font-sans">
                    *by August 20th
                </div>
            </div>
        </div>
    );
};
