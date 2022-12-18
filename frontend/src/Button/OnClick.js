import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const SERVER_LINK = "http://localhost:5000"

export const onClickDownload = (ref) => {
  const card = ref.current;
  domtoimage.toBlob(card).then((blob) => {
    saveAs(blob, 'card.png');
  });
};

export const onClickSendServer = async (event, formdata, base64) =>{
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("userId", formdata.userId);
  urlencoded.append("userName", formdata.userName);
  urlencoded.append("moreInfo",formdata.moreInfo)
  urlencoded.append("userPhone", formdata.userPhone)
  urlencoded.append("userEmail", formdata.userEmail)
  urlencoded.append("userLink", formdata.userLink)
  urlencoded.append("profileBlob", base64)

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const fetchLink = SERVER_LINK + "/api/profile/insert"

  const response = await fetch(fetchLink, requestOptions);
  const res = await response.json()
  
  console.log(res)
  
    if(res.update == "true"){
      return await updateProfile(requestOptions)
    }
  
  return res;
}

const updateProfile = async (requestOptions) =>{
  const fetchLink = SERVER_LINK + "/api/profile/update"
  const response = await fetch(fetchLink, requestOptions)
  return await response.json();
}

export const OnClickGetForm = async (formdata) =>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("userId", formdata.userId);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const fetchLink = SERVER_LINK + "/api/profile/search"
  const response = await fetch(fetchLink, requestOptions)
  const result = await response.json()
  console.log(result)

  if(result.empty != "true"){
    const blobFetch = await fetch(fetchLink+"/blob", requestOptions)
    const blob = await blobFetch.text()
    console.log(blob)
    return [result, blob]
  }

  return [result,0]
}

export const onCLickDeleteForm = async (formdata) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("userId", formdata.userId);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const fetchLink = SERVER_LINK + "/api/profile/delete"
  let response = await fetch(fetchLink, requestOptions)
  let result = await response.json()
  console.log(result)
}