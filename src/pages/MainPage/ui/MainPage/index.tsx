import { Block_1 } from './Block_1';
import { Ceremony } from './Ceremony';
import { InvitationForm } from './Forma';
import { Main } from './Main';
import { Our_story } from './Our_story';
import { The_Wedding } from './The_Weddig';
import photo2 from '../../../../shared/assets/p1.jpg';
import AudioPlayer from './AudioPlayer';

export const WeddingInvitation = () => {
    return (
        <div className="text-[#9D8280] bg-[#9D8280] flex flex-col font-cormorant  justify-center">
            <Main />
            <Block_1 />
            <Our_story />
            <The_Wedding img={photo2} />
            <InvitationForm />
            <Ceremony />
            <AudioPlayer />
        </div>
    );
};
