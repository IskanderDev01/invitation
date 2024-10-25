// import AudioPlayer from './AudioPlayer';
import { Block_1 } from './Block_1';
import { Ceremony } from './Ceremony';
import { InvitationForm } from './Forma';
import { Main } from './Main';
import { Our_story } from './Our_story';
import { Our_video } from './Our_video';

export const WeddingInvitation = () => {
    return (
        <div className="text-[#9D8280] bg-[#9D8280] flex flex-col justify-center">
            <Main />
            <Block_1 />
            <Our_story />
            <Our_video />
            <InvitationForm />
            <Ceremony />
        </div>
    );
};
