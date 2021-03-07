// node_modules/typescript/lib/tsserverlibrary.d.ts
module.exports = function ({ /** @type {tssl} */ typescript }) {
  return {
    create(/** @type {tssl.server.PluginCreateInfo} */ info) {
      const resolveModuleNames = info.languageServiceHost.resolveModuleNames.bind(info.languageServiceHost);

      info.languageServiceHost.resolveModuleNames = function (moduleNames, containingFile, reusedNames, redirectedReferences, options) {
        // Copy not mutate the array otherwise the language service will break
        // Strip `?search` and `#fragment` off relative path module names containing them
        moduleNames = moduleNames.map(moduleName => moduleName.match(/^(\.\.?\/.*?)(\?.*)?(#.*?)?$/)?.[1] ?? moduleName);
        info.project.projectService.logger.info('resolveModuleNames ' + moduleNames);
        return resolveModuleNames(moduleNames, containingFile, reusedNames, redirectedReferences, options);
      };

      return info.languageService;
    }
  };
};
