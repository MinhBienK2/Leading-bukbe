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
    id: 0,
    label: 'Introduce.body1.card_2-1',
    icon: <IconDiamond />,
    subLabel: 'Introduce.body1.card_2-2',
  },
  {
    id: 0,
    label: 'Introduce.body1.card_3-1',
    icon: <IconEye />,
    subLabel: 'Introduce.body1.card_3-2',
  },
];

export const dataCard2 = [
  {
    id: 0,
    label: 'Tiện lợi và tiết kiệm thời gian',
    labelButton: 'Chuyển đến Bukbe',
    icon: `${icons.page}`,
    subLabel:
      'Sử dụng ứng dụng đặt lịch, người dùng có thể dễ dàng chọn lịch hẹn phù hợp với thời gian rảnh rỗi của mình. Không cần gọi điện thoại hoặc đến trực tiếp cửa hàng để đặt lịch, người dùng có thể lựa chọn ngày, giờ và dịch vụ mong muốn chỉ bằng vài thao tác trên ứng dụng.',
  },
];
export const dataCard3 = [
  {
    id: 0,
    label: 'Quản lý hiệu quả',
    labelButton: 'Chuyển đến Bukbe',
    icon: `${icons.page}`,
    subLabel:
      'Chúng tôi cung cấp một giao diện quản lý lịch hẹn dễ sử dụng để bạn có thể theo dõi và quản lý lịch trình của mình. Bạn có thể xem, chỉnh sửa và hủy bỏ lịch hẹn, đồng thời nhận được thông báo tự động khi có thay đổi.',
  },
];
export const dataCard4 = [
  {
    id: 0,
    label: 'Thống kê và báo cáo rõ ràng',
    labelButton: 'Chuyển đến Bukbe',
    icon: `${icons.page}`,
    subLabel:
      ' Ứng dụng cung cấp báo cáo và thống kê chi tiết về doanh thu, số lượng khách hàng, mô hình tiêu thụ và nhiều thông tin quan trọng khác. Điều này giúp bạn hiểu rõ hơn về hiệu suất kinh doanh và đưa ra các quyết định chiến lược dựa trên dữ liệu thống kê.',
  },
];

export const dataList = [
  {
    id: 0,
    menu: 'Menu',
    ListName: {
      name: 'Giới thiệu',
      UserManual: 'Hướng dẫn sử dụng',
      Contact: 'Liên hệ',
    },
    ListLink: {
      0: '/introduce',
      1: '/',
      2: '/',
    },
  },
  {
    id: 1,
    menu: 'Social',
    ListName: {
      Telegram: 'Telegram',
    },
    ListLink: {
      0: '/',
      1: '/',
      2: '/',
    },
  },
  {
    id: 2,
    menu: 'Liên hệ',
    ListName: {
      email: 'Email: borostudio2018@gmail.com',
      phone: 'Hotline: 1800 0607',
    },
    ListLink: {
      0: '/',
      1: '/',
      2: '/',
    },
  },
];
