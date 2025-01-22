To mitigate the `deviceId` inconsistency, you should use AsyncStorage to store a unique identifier generated once when the app first runs.

```javascript
import * as Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import {v4 as uuidv4} from 'uuid';

async function getOrCreateDeviceId() {
  let deviceId = await SecureStore.getItemAsync('deviceId');
  if (!deviceId) {
    deviceId = uuidv4();
    await SecureStore.setItemAsync('deviceId', deviceId);
  }
  return deviceId;
}

async function main() {
  const persistentDeviceId = await getOrCreateDeviceId();
  console.log('Persistent Device ID:', persistentDeviceId);
  // ... use persistentDeviceId in your application ...
}

main();
```

This improved approach ensures a consistent and unique identifier is used throughout the app's lifecycle.