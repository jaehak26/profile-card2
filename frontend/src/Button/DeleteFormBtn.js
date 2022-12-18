import React from 'react';

import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { userInfo } from '../recoil/UserInfo';
import {onCLickDeleteForm} from './OnClick'
import {isDumpedState} from '../isDumpedState'

export default function DeleteForm() {
  const [userCoil, setUserCoil] = useRecoilState(userInfo);

  return (
    <>
      <Button variant="outlined"
      onClick={async (e)=>{
        if(isDumpedState(userCoil.userId)){
          alert("userId를 입력해주세요.")
        }else{
          await onCLickDeleteForm(userCoil);
        }       
      }}>DB데이터 삭제</Button>
    </>
  );
}