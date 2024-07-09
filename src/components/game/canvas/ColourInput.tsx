import { inputColourClasses } from '@/constants';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from '@/components/ui/select';

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
          <SelectItem value='red'>Red</SelectItem>
          <SelectItem value='blue'>Blue</SelectItem>
          <SelectItem value='green'>Green</SelectItem>
          <SelectItem value='yellow'>Yellow</SelectItem>
          <SelectItem value='pink'>Pink</SelectItem>
          <SelectItem value='purple'>Purple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ColourInput;
