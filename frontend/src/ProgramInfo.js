import React, {useState, useEffect} from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { FONTAWSOME_LINK } from './Link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default function ProgramInfo(){

    const [dialogOpen, setdialogOpen] = useState(false)

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

    return <>
    <InfoOutlinedIcon fontSize="large" onClick={()=>setdialogOpen(true)}
    sx={{cursor:"pointer"}}/>
    <Dialog open={dialogOpen}
    onClose={(reason="backdropClick")=>{setdialogOpen(false)}}
    fullWidth={true}>   
        <DialogTitle>
        <InfoOutlinedIcon style={{position:"relative", top:"4px"}}/>
            <span >{' Info'}</span>
        </DialogTitle>
        <DialogContent> 
            <div>
                View More 버튼 : Link에 적은 웹 페이지로 이동합니다.
            </div>
            <br/>
            <Icon
            baseClassName="far"
            className="fa-sticky-note"
            sx = {{float: 'left', marginRight: '5px'}}
            /> {" : 프로필 카드를 로컬에 다운로드 할 수 있습니다."}
            <br></br>
            <br></br>
            <div>
                파일 선택 버튼 - 클릭 시 로컬의 이미지를 찾아 프로필 카드의 사진에 넣어줍니다.
            </div>
        </DialogContent>    
        <DialogActions>
            <Button onClick={()=>setdialogOpen(false)}>확인</Button>
        </DialogActions>
    </Dialog>
    </>
}