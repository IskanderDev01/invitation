import { Block_1 } from './Block_1';
import { Ceremony } from './Ceremony';
import { InvitationForm } from './Forma';
import { Our_story } from './Our_story';
import { The_Wedding } from './The_Weddig';
import photo2 from '../../../../shared/assets/p1.jpg';
import AudioPlayer from './AudioPlayer';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Main } from './Main';
import photo1 from '../../../../shared/assets/p3.jpg';

export const WeddingInvitation = () => {
    const [isFlag, setIsFlag] = useState(false);
    const targetDate = new Date('2024-11-06T18:00:00');

    return (
        <div className="text-[#9D8280] bg-[#9D8280] flex flex-col font-cormorant  justify-center">
            {!isFlag && (
                <Countdown
                    date={targetDate}
                    renderer={({
                        days,
                        hours,
                        minutes,
                        seconds,
                        completed,
                    }) => {
                        if (completed) {
                            setIsFlag(true);
                        } else {
                            return (
                                <div className="flex justify-center space-x-4 text-4xl bg-[#fffbfb]">
                                    {/* Анимация блока для каждого элемента */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-center px-1"
                                    >
                                        <span className="text-4xl">
                                            {String(days).padStart(2, '0')}
                                        </span>
                                        <div className="text-xl">дней</div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.1,
                                        }}
                                        className="text-center px-1"
                                    >
                                        <span className="text-4xl">
                                            {String(hours).padStart(2, '0')}
                                        </span>
                                        <div className="text-xl">час</div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                        }}
                                        className="text-center px-1"
                                    >
                                        <span className="text-4xl">
                                            {String(minutes).padStart(2, '0')}
                                        </span>
                                        <div className="text-xl">минут</div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="text-center px-1"
                                    >
                                        <span className="text-4xl">
                                            {String(seconds).padStart(2, '0')}
                                        </span>
                                        <div className="text-xl">секунд</div>
                                    </motion.div>
                                </div>
                            );
                        }
                    }}
                />
            )}
            {isFlag && <Main />}
            <Block_1 />
            <Our_story />
            <The_Wedding img={isFlag ? photo1 : photo2} />
            <InvitationForm />
            <Ceremony isFlag={isFlag} />
            <AudioPlayer />
        </div>
    );
};
