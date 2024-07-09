import { responseColourClasses } from '@/constants';
import { Responses } from '../gameFunctions';

const FeedbackSingle = ({ colour }: { colour: Responses }) => {
  return <p className={`w-3 h-3 ${responseColourClasses[colour]} m-0.5 rounded-full`}></p>;
};

const FeedbackBlock = ({ responseArray }: { responseArray: Responses[] }) => {
  return (
    <div className='h-10 flex flex-col justify-center items-center rounded-lg border-stone-400 border-2 align-middle ml-6 p-1'>
      <div className='flex'>
        <FeedbackSingle colour={responseArray[0]} />
        <FeedbackSingle colour={responseArray[1]} />
      </div>
      <div className='flex'>
        <FeedbackSingle colour={responseArray[2]} />
        <FeedbackSingle colour={responseArray[3]} />
      </div>
    </div>
  );
};

export default FeedbackBlock;
