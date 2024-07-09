import { inputColourClasses } from '@/constants';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from '@/components/ui/select';

const DecoratedOption = ({ colour, colourClass }: { colour: string; colourClass: string }) => {
  return (
    <div className='flex items-center space-x-1.5'>
      <span className={`inline-block w-3.5 h-3.5 ${colourClass} rounded-full`}></span>
      <span>{colour}</span>
    </div>
  );
};

interface Props {
  arrayHandler: (colour: string) => void;
  disabled: boolean;
}

export function ColourInput(props: Props) {
  const { arrayHandler, disabled } = props;
  const [colour, setColour] = useState('');

  const handleColourChange = (colour: string) => {
    setColour(colour);
    arrayHandler(colour);
  };

  return (
    <Select disabled={disabled} value={colour} onValueChange={handleColourChange}>
      <SelectTrigger
        className={`h-7 w-7 ${inputColourClasses[colour]} rounded-full m-1`}
      ></SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='red'>
            <DecoratedOption colour='Red' colourClass={inputColourClasses['red']} />
          </SelectItem>
          <SelectItem value='blue'>
            <DecoratedOption colour='Blue' colourClass={inputColourClasses['blue']} />
          </SelectItem>
          <SelectItem value='green'>
            <DecoratedOption colour='Green' colourClass={inputColourClasses['green']} />
          </SelectItem>
          <SelectItem value='yellow'>
            <DecoratedOption colour='Yellow' colourClass={inputColourClasses['yellow']} />
          </SelectItem>
          <SelectItem value='pink'>
            <DecoratedOption colour='Pink' colourClass={inputColourClasses['pink']} />
          </SelectItem>
          <SelectItem value='purple'>
            <DecoratedOption colour='Purple' colourClass={inputColourClasses['purple']} />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ColourInput;
