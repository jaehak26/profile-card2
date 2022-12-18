import React, {useState} from "react";
import { useRecoilState } from 'recoil'; 
import {inputBase64} from './recoil/Base64'
import './style.css'
import { Button } from '@mui/material'

export default function ImgUpload() {

  const [base64Data, setBase64Data] = useState(null)
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64)

  function onChange(e){
    debugger;
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  const _handleReaderLoaded = e => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    setBase64Data( btoa(binaryString));
    setBaseDataCoil(btoa(binaryString))
  };


    return (
      <div>
        <Button variant="outlined" color= 'success'>
        <label>사진 찾기
          <input
            type="file"
            name="image"
            id="file"
            accept="image/*"
            onChange={e => onChange(e)}
          />
        </label>
        </Button>
        {/*<p>base64 string: {base64Data}</p>*/}
        <br />
        {/* base64Data != null && <img src={`data:image;base64,${base64Data}`}/> */}
      </div>
    );
  
}


