import AsyncStorage from '@react-native-async-storage/async-storage';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';

const setItem = async (itemKey, itemVal) => {
  try {
    const jsonValue = JSON.stringify(itemVal);
    await AsyncStorage.setItem(`${itemKey}`, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getItem = async itemKey => {
  try {
    const value = await AsyncStorage.getItem(itemKey);
    return value != null ? value : null;
  } catch (e) {
    // error reading value
  }
};
const removeItem = itemKey => {
  AsyncStorage.removeItem(itemKey);
};

const clearStorage = () => {
  AsyncStorage.clear();
};

export {getItem, setItem, removeItem, clearStorage};
