import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfo } from './recoil/UserInfo';
import TextField from '@mui/material/TextField';

export default function InputUserInfo() {
  const [userInfoCoil, setUserInfoCoil] = useRecoilState(userInfo);

  const onChangeUserId = (idEvent) => {
    setUserInfoCoil({ ...userInfoCoil, userId: idEvent.target.value });
  };
  const onChangeName = (nameEvent) => {
    setUserInfoCoil({ ...userInfoCoil, userName: nameEvent.target.value });
  };
  const onChangeMoreInfo = (moreInfoEvent) => {
    setUserInfoCoil({
      ...userInfoCoil,
      moreInfo: moreInfoEvent.target.value,
    });
  };
  const onChangePhone = (phoneEvent) => {
    setUserInfoCoil({ ...userInfoCoil, userPhone: phoneEvent.target.value });
  };
  const onChangeEmail = (emailEvent) => {
    setUserInfoCoil({ ...userInfoCoil, userEmail: emailEvent.target.value });
  };
  const onChangeLink = (linkEvent) => {
    setUserInfoCoil({ ...userInfoCoil, userLink: linkEvent.target.value });
  };

  return (
    <div>
      <div>
        <TextField label="userId" onChange={(e) => onChangeUserId(e)} />
      </div>
      <div>
        <TextField label="Name" onChange={(e) => onChangeName(e)} />
      </div>
      <div>
        <TextField
          label="More Infomation"
          onChange={(e) => onChangeMoreInfo(e)}
        />
      </div>
      <div>
        <TextField label="Phone" onChange={(e) => onChangePhone(e)} />
      </div>
      <div>
        <TextField label="Email" onChange={(e) => onChangeEmail(e)} />
      </div>
      <div>
        <TextField label="Link" onChange={(e) => onChangeLink(e)} />
      </div>
    </div>
  );
}
