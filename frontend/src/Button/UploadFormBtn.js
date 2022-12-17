import React from 'react';

import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { inputBase64 } from '../recoil/Base64';
import { userInfo } from '../recoil/UserInfo';
import {onClickSendServer} from './OnClick'

export default function UploadForm() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);
  const [userCoil, setuserCoil] = useRecoilState(userInfo);


  return (
    <>
      <Button variant="outlined"
      onClick={async (e)=>{
        let response = await onClickSendServer(e,userCoil,baseDataCoil);
        //console.log(response);
      }}>DB에 저장</Button>
    </>
  );
}