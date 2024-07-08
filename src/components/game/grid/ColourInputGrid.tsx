import { useState } from 'react';
import ColourInputRow from './ColourInputRow';
import Notification from '../Notification';
import Outcome from '../outcome/Outcome';

const ColourInputGrid = () => {
  const [notif, setNotif] = useState('');
  const [showModal, setShowModal] = useState(false);

  const setNotifWithTimeout = () => {
    setNotif('Please fill up the entire row before checking');
    setTimeout(() => setNotif(''), 5000);
  };

  const elements = [];
  for (let i = 1; i < 11; i++) {
    elements.push(
      <ColourInputRow
        key={i}
        turn={i}
        setNotif={setNotifWithTimeout}
        handleShowModal={setShowModal}
      />
    );
  }

  return (
    <div className='mt-8'>
      <Notification notif={notif} />
      {elements}
      <Outcome show={showModal} handleShow={setShowModal} />
    </div>
  );
};

export default ColourInputGrid;
