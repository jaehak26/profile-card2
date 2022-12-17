import { atom } from 'recoil';

export const userInfo = atom({
  key: 'userInfo',
  default: {
    userId: null,
    userName: null,
    moreInfo: null,
    userPhone: null,
    userEmail: null,
    userLink: null,
  },

});
