import { Permissions, Notifications } from 'expo';
import { db } from '../config';

//const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';
let ParticipantsRef= db.ref('/participants')

updateToken = (index,mytoken) => {
  let ref1 = db.ref("/participants/" + index);
  console.log("helllooooo"+mytoken);
  ref1.update({ token: mytoken });
}

const registerForPushNotificationsAsync = async() => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
  updateToken(0,token);

};
export {registerForPushNotificationsAsync} ;