import React, { useEffect, useRef } from 'react';
import './style.css';

import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { FONTAWSOME_LINK } from './Link';

import { useRecoilState } from 'recoil';
import { inputBase64 } from './recoil/Base64';
import { userInfo } from './recoil/UserInfo';
import { onClickDownload } from './Button/OnClick';

import {isDumpedState} from './isDumpedState'


import { ICON_CSS} from './style';

export default function Profile() {
  const [baseDataCoil, setBaseDataCoil] = useRecoilState(inputBase64);
  const [userCoil, setuserCoil] = useRecoilState(userInfo);
  const ref = useRef();

  useEffect(() => {
    const node = loadCSS(
      FONTAWSOME_LINK,
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);


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
          <Icon baseClassName="fas" className="fa-bars" />
          <Icon
            baseClassName="far"
            className="fa-sticky-note"
            onClick={() => onClickDownload(ref)}
            sx={{cursor:"pointer"}}
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
                <Icon
                  baseClassName="fas"
                  className="fa-phone"
                  sx={{ ...ICON_CSS }}
                />
                <UserPhoneComp/>
              </li>
              <li>
                <Icon
                  baseClassName="fas"
                  className="fa-envelope"
                  sx={ICON_CSS}
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