import React from 'react';

import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { inputBase64 } from '../recoil/Base64';
import { userInfo } from '../recoil/UserInfo';
import {OnClickGetForm} from './OnClick'

export default function GetForm() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);
  const [userCoil, setUserCoil] = useRecoilState(userInfo);


  return (
    <>
      <Button variant="outlined"
      onClick={async (e)=>{
        let [result, blob] = await OnClickGetForm(userCoil);
        console.log(result);
        if(result.empty == "true"){
            alert("해당 id는 등록되어있지 않습니다.")
        }
        else{
            delete result.empty
            setUserCoil(result)
            setBaseDataCoil(blob)
        }
      }}>DB에서 가져오기</Button>
    </>
  );
}