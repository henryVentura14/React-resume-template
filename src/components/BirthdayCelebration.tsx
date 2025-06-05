import {FC, memo, useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';

import useWindow from '../hooks/useWindow';

const BirthdayCelebration: FC = memo(() => {
  const [showCelebration, setShowCelebration] = useState(false);
  const {width, height} = useWindow();

  useEffect(() => {
    const today = new Date();
    const isMyBirthday = today.getDate() === 23 && today.getMonth() === 5;
    setShowCelebration(isMyBirthday);
  }, []);

  if (!showCelebration) return null;

  return (
    <>
      <ReactConfetti height={height} numberOfPieces={300} recycle={true} width={width} />
      <div className="fixed inset-x-0 top-24 z-50 mx-auto flex max-w-md justify-center ">
        <div className="rounded-lg bg-gray-800/40 backdrop-blur-sm px-4 py-2 text-center shadow-lg">
          <p className="text-lg font-semibold text-white">¡Feliz Cumpleaños a mí! 🎉</p>
          <p className="text-sm text-white">Gracias por visitar mi website en este día tan especial</p>
        </div>
      </div>
    </>
  );
});

BirthdayCelebration.displayName = 'BirthdayCelebration';
export default BirthdayCelebration;
