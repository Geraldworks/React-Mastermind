import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Props {
  notif: string;
}

const Notification = (props: Props) => {
  const { notif } = props;

  return notif === '' ? null : (
    <div className='flex justify-center'>
      <Alert variant='destructive' className='mb-8 w-1/2 max-w-96'>
        <AlertCircle className='h-4 w-4' />
        <AlertDescription className='text-center'>{notif}</AlertDescription>
      </Alert>
    </div>
  );
};

export default Notification;
