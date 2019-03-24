import {permissions,nodifications} from 'expo' ;

const registerForPushNodificationsAsync =async() =>
{
//async function registerForPushNodificationsAsync(){
  const {status :existingStatus}= await Permissions.getAsync(Permissions.NODIFICATIONS);

let finalStatus=existingStatus ;
if (existingStatus!=='granded'){ 

const {status}= await Permissions.askAsync(Permissions.NODIFICATIONS);
finalStatus=status ;
}
if (finalStatus!=='granded')
{
  return ;
}

let token =await Notifications.getExpoPushTokenAsync();
return fetch(PUSH_ENDPOINT ,{ 
  method : 'POST',
  body :JSON.stringify({
    token:{
      value:token ,
    }
  })
});
}
export {registerForPushNodificationsAsync};
