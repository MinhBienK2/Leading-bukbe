import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from 'store/slice/user/selectors';

type Props = {};

const HomePage = (props: Props) => {
  const user = useSelector(selectUser);

  console.log(user);

  return <>HomePage</>;
};

export default HomePage;
