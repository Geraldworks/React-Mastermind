import { inputColourClasses } from '@/constants';

interface Props {
  colours: string[];
}

const OutcomeColourRow = (props: Props) => {
  const { colours } = props;
  return (
    <span className='flex justify-center m-2'>
      <span className={`w-7 h-7 rounded-full ${inputColourClasses[colours[0]]} m-1`}></span>
      <span className={`w-7 h-7 rounded-full ${inputColourClasses[colours[1]]} m-1`}></span>
      <span className={`w-7 h-7 rounded-full ${inputColourClasses[colours[2]]} m-1`}></span>
      <span className={`w-7 h-7 rounded-full ${inputColourClasses[colours[3]]} m-1`}></span>
    </span>
  );
};

export default OutcomeColourRow;
