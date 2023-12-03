import {
  ConfigPlugin,
  withStringsXml,
  AndroidConfig,
  withAndroidStyles,
} from "expo/config-plugins"

/**
 * 
 * Expo Config Plugin to help address the double splash screen issue with `expo-splash-screen`
 * See more information about this issue here: https://github.com/expo/expo/issues/16084
 * 
 * How it works: 
 *   1) Replace the default splash screen with a transparent screen
 *   2) Set the splash screen status bar to translucent
 */
export const withIosX86: ConfigPlugin = (config) => {
  // dangerously mod the post_install of Podfile to set the simulator builds to x86
  
  
  return config
}
