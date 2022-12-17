import React  from 'react';
import './style.css';

import ImgUpload from './ImgUpload';
import InputUserInfo from './InputUserInfo';
import UploadFormBtn from './Button/UploadFormBtn'
import Profile from './Profile';
import GetForm from './Button/GetFormBtn';
import DeleteForm from './Button/DeleteFormBtn'
 

export default function MainPage() {

  return (
    <div>
      <Profile></Profile>
      <InputUserInfo></InputUserInfo>
      <ImgUpload></ImgUpload>
      <UploadFormBtn></UploadFormBtn>
      <GetForm></GetForm>
      <DeleteForm></DeleteForm>
    </div>
  );
}
