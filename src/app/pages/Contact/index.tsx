import React, { useEffect, useState } from 'react';
import { addCache } from 'serviceWorker';

import image from '@assets/images/guide/moreStaff/step-1-1.svg';

type Props = {};

const Contact = (props: Props) => {
  const [resCache, setResCache] = useState<any>();

  const Fetch = async () => {
    await addCache('v2', image);
  };

  return (
    <>
      <div onClick={Fetch}>Contact</div>
      <img src={image} alt="Hello" style={{ width: '100px', height: '100px' }} />
    </>
  );
};

export default Contact;
