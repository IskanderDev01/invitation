import photo5 from '../../../../shared/assets/photo5.png';

export const The_Wedding = () => {
    return (
        <>
            <div
                className="px-10 pt-5 flex flex-col justify-center items-center"
                style={{
                    background:
                        'linear-gradient(to bottom, #fffbfb 45%,  #e1d9d4 55%)',
                }}
            >
                <img src={photo5} width={300} className='flex justify-center'/>
                <div className="bg-[#e1d9d4] pt-10 px-10 text-[34px] font-parisienne text-center">
                    The wedding
                </div>
            </div>
        </>
    );
};
