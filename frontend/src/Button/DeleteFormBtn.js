import React from 'react';

import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { userInfo } from '../recoil/UserInfo';
import {onCLickDeleteForm} from './OnClick'

export default function DeleteForm() {
  const [userCoil, setUserCoil] = useRecoilState(userInfo);

  return (
    <>
      <Button variant="outlined"
      onClick={async (e)=>{
        await onCLickDeleteForm(userCoil);
      }}>DB데이터 삭제</Button>
    </>
  );
}