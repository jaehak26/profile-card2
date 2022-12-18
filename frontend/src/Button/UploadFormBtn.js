import React from 'react';

import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { inputBase64 } from '../recoil/Base64';
import { userInfo } from '../recoil/UserInfo';
import {onClickSendServer} from './OnClick'
import {isDumpedState} from '../isDumpedState'

export default function UploadForm() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);
  const [userCoil, setuserCoil] = useRecoilState(userInfo);


  return (
    <>
      <Button variant="outlined"
      onClick={async (e)=>{
        if(isDumpedState(userCoil.userId)){
          alert("userId를 입력해주세요.")
        }
        else{
          await onClickSendServer(e,userCoil,baseDataCoil);
          //console.log(response);
        }
      }}>DB에 저장</Button>
    </>
  );
}