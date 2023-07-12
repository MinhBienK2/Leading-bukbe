import react from 'react';
import { images } from 'assets/images';

import { ReactComponent as IconPage } from '@icons/card/page.svg';
import { ReactComponent as IconDiamond } from '@icons/card/diamond.svg';
import { ReactComponent as IconEye } from '@icons/card/eye.svg';
import { icons } from '@assets/icons';

export type TDataCard = {
  id: number;
  label: string;
  icon: React.ReactNode;
  subLabel: string;
};

export const dataCard: TDataCard[] = [
  {
    id: 0,
    label: 'Introduce.body1.card_1-1',
    icon: <IconPage />,
    subLabel: 'Introduce.body1.card_1-2',
  },
  {
    id: 1,
    label: 'Introduce.body1.card_2-1',
    icon: <IconDiamond />,
    subLabel: 'Introduce.body1.card_2-2',
  },
  {
    id: 2,
    label: 'Introduce.body1.card_3-1',
    icon: <IconEye />,
    subLabel: 'Introduce.body1.card_3-2',
  },
];
