export const isDumpedState = (state) =>{
    if(state == null || state == "null" || 
    state == "undefined" || state == undefined 
    || state == ""){
        return true
    }
    return false;
  }