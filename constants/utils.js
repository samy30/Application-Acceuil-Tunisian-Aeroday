import { Platform, StatusBar } from "react-native";
import { theme } from "galio-framework";
import { AsyncStorage } from "react-native";

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = theme.SIZES.BASE * 3.5 + (StatusHeight || 0);
export const iPhoneX = () =>
  Platform.OS === "ios" && (height === 812 || width === 812);

export const storeVoteStatus = async () => {
  try {
    await AsyncStorage.setItem("status", "Voted");
    return true;
  } catch (error) {
    // Error saving data
    return false;
  }
};

export const retrieveVoteStatus = async () => {
  try {
    const value = await AsyncStorage.getItem("status");
    if (value !== null) {
      // We have data!!
      return true;
    }
    return false;
  } catch (error) {
    // Error retrieving data
    console.log(error);
    return false;
  }
};

export const removeVoteStatus = async () => {
  try {
    const value = await AsyncStorage.removeItem("status");
    return true;
  } catch (error) {
    // Error retrieving data
    console.log(error);
    return false;
  }
};
