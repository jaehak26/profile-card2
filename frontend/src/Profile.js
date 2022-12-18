import React, { useEffect, useRef } from 'react';
import './style.css';

import { useRecoilState } from 'recoil';
import { inputBase64 } from './recoil/Base64';
import { userInfo } from './recoil/UserInfo';
import { onClickDownload } from './Button/OnClick';

import {isDumpedState} from './isDumpedState'

import MenuIcon  from './Icon/bars-solid.svg'
import EnvelopeIcon from './Icon/envelope-solid.svg'
import NoteIcon from './Icon/note-sticky-regular.svg'
import PhoneIcon from './Icon/phone-solid.svg'


import { ICON_CSS, PHONE_ICON_CSS} from './style';

export default function Profile() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);
  const [userCoil, setuserCoil] = useRecoilState(userInfo);
  const ref = useRef();


  const UserNameComp = () =>{
    if(isDumpedState(userCoil.userName)){
        return <h1>name</h1>
    }else{
        return <h1>{userCoil.userName}</h1>
    }
  }

  const MoreInfoComp = () =>{
    if(isDumpedState(userCoil.moreInfo)){
        return <h2>for more information</h2>
    }else{
        return <h2>{userCoil.moreInfo}</h2>
    }
  }

  const UserLinkComp = () =>{
    if(isDumpedState(userCoil.userLink)){
        return <a href= "#" className="btnView">View More</a>
    }else{
        return <a href={userCoil.userLink} className="btnView">View More</a>
    }
  }

  const UserPhoneComp = () =>{
    if(isDumpedState(userCoil.userPhone)) {
        return <span className="afterIcon">010-0000-0000</span>
    }else{
        return <span className="afterIcon">{userCoil.userPhone}</span>
    }
  }

  const UserEmailComp = () =>{
    if(isDumpedState(userCoil.userEmail)){
        return <span className="afterIcon">email@email.com</span>
    }else{
        return <span className="afterIcon">{userCoil.userEmail}</span>
    }
  }

  return (
    <div>
      <div ref={ref}>
        <section>
          <img src={MenuIcon} className="fa-bars" />
          <img src={NoteIcon}
            className="fa-sticky-note"
            onClick={() => onClickDownload(ref)}
            style={{cursor:"pointer"}}
          />
          <article className="profile">
            <br />
            <div>           
              {baseDataCoil != null && (
                <img src={`data:image;base64,${baseDataCoil}`} alt="profile" />
              )}
            </div>
            <UserNameComp/>
            <MoreInfoComp/>

            <UserLinkComp/>
    
            <ul className="contact">
              <li>
                <img src={PhoneIcon}
                  className="fa-phone"
                  style={{ ...ICON_CSS,...PHONE_ICON_CSS }}
                />
                <UserPhoneComp/>
              </li>
              <li>
                <img src={EnvelopeIcon}
                  className="fa-envelope"
                  style={ICON_CSS}
                />
                <UserEmailComp/>
              </li>
            </ul>
          </article>
        </section>
        <br />
      </div>

    </div>
  );
}