import React, {useState, useEffect} from 'react';

const useCardInfo = creditCardNumber => {
  const [cardType, setCardType] = useState('');

  useEffect(() => {
    setCardType(
      +creditCardNumber.slice(13, 16) > 2000 ? 'Master Card' : 'Visa',
    );
  }, [cardType]);

  return {cardType};
};

export default useCardInfo;
