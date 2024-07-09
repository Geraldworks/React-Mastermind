import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Props {
  leftButtonText: string;
  leftButtonTo: string;
  rightButtonText: string;
  rightButtonTo: string;
}

const NavBar = (props: Props) => {
  const { leftButtonText, leftButtonTo, rightButtonText, rightButtonTo } = props;
  return (
    <div className='flex items-center justify-center space-x-8 m-6'>
      <Link to={leftButtonTo} className={`${buttonVariants({ variant: 'outline' })}`}>
        {leftButtonText}
      </Link>
      <Link to={rightButtonTo} className={`${buttonVariants({ variant: 'outline' })}`}>
        {rightButtonText}
      </Link>
    </div>
  );
};

export default NavBar;
