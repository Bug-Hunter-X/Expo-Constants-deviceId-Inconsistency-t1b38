# Expo Constants.deviceId Inconsistency

This repository demonstrates a common issue encountered when using `Constants.deviceId` in Expo applications.  The `deviceId` provided by Expo is not always consistent across app sessions or even restarts, making it unsuitable for scenarios demanding reliable unique device identification (like user accounts or analytics). This example illustrates the problem and provides a potential solution using a more robust approach such as AsyncStorage.

## Problem
The primary issue is that `Constants.deviceId` can change between app sessions, invalidating any data or logic relying on its persistence.

## Solution
The recommended solution is to use a more reliable method of storing a unique device identifier, such as AsyncStorage to persistently store a generated UUID on first run. 