import { useState } from 'react';
import ColourInputRow from './ColourInputRow';
import Notification from '../Notification';
import Outcome from '../outcome/Outcome';
import GameOptions from './GameOptions';

const PlayArea = () => {
  const [notif, setNotif] = useState('');
  const [showModal, setShowModal] = useState(false);

  const setNotifWithTimeout = () => {
    setNotif('Please fill up the entire row before checking');
    setTimeout(() => setNotif(''), 5000);
  };

  const inputRows = [];
  for (let i = 1; i < 11; i++) {
    inputRows.push(
      <ColourInputRow
        key={i}
        turn={i}
        setNotif={setNotifWithTimeout}
        handleShowModal={setShowModal}
      />
    );
  }

  return (
    <div className='mt-6'>
      <Notification notif={notif} />
      <GameOptions handleShowModal={setShowModal} />
      {inputRows}
      <Outcome show={showModal} handleShow={setShowModal} />
    </div>
  );
};

export default PlayArea;
