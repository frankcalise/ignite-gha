import { ConfigPlugin, withXcodeProject } from "expo/config-plugins"

export const withIosX86: ConfigPlugin = (config) => {
  return withXcodeProject(config, (config) => {
    const configurations = config.modResults.pbxXCBuildConfigurationSection()
    for (const sectionKey in configurations) {
      const configSection = configurations[sectionKey]
      if (
        configSection.name === "Debug" &&
        configSection.baseConfigurationReference === undefined
      ) {
        const buildSettings = configSection.buildSettings
        if (buildSettings !== undefined) {
          buildSettings.ONLY_ACTIVE_ARCH = "NO"
          // buildSettings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
        }
      }
    }

    return config
  })
}
