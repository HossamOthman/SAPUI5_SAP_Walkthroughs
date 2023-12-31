# SAPUI5_SAP_Walkthroughs

# walkthroughgithub: 
https://github.com/brandoncaulfield/sap-ui5-walkthrough/commits/main?before=26f804cea86ce1fd92e22d9f287fec7f273ca46f+35&branch=main

# CORS cross origin resource sharing
https://sapui5.hana.ondemand.com/#/topic/5bb388fc289d44dca886c8fa25da466e.html

# UI5 tooling:
https://sap.github.io/ui5-tooling/stable/

UI5 Tooling
An open and modular toolchain to develop state-of-the-art applications based on the UI5 framework.

Get Started

Main Features
💻 UI5 CLI
Also see the UI5 CLI Documentation


# Global
npm install --global @ui5/cli

# In your project
npm install --save-dev @ui5/cli


⚙️ Project Setup
Configure your project for use with UI5 Tooling.
Also see the Configuration Documentation


❯ ui5 init
Wrote ui5.yaml:

specVersion: "3.2"
metadata:
  name: my-app
type: application
🚚 Dependency Management
UI5 framework dependencies are managed by the tooling. All other dependencies are managed by your favorite node package manager.


❯ ui5 use SAPUI5@1.117.0
Updated configuration written to ui5.yaml
This project is now using SAPUI5 version 1.117.0

❯ ui5 add sap.ui.core sap.m themelib_sap_fiori_3
Updated configuration written to ui5.yaml
Added framework libraries sap.ui.core sap.m themelib_sap_fiori_3 as dependencies
🏄 Development Server
Start a local development server to work on your project.
Also see the Server Documentation


❯ ui5 serve
Server started
URL: http://localhost:8080
🛠 Build for Production
Build an optimized version of your project.
Also see the Builder Documentation


❯ ui5 build
info graph:helpers:ui5Framework Using OpenUI5 version: 1.117.0
info ProjectBuilder Preparing build for project my-app
info ProjectBuilder   Target directory: ./dist
info ProjectBuilder Cleaning target directory...
info Project 1 of 1: ❯ Building application project my-app...
info my-app › Running task escapeNonAsciiCharacters...
info my-app › Running task replaceCopyright...
info my-app › Running task replaceVersion...
info my-app › Running task minify...
info my-app › Running task generateFlexChangesBundle...
info my-app › Running task generateComponentPreload...
info ProjectBuilder Build succeeded in 296 ms
info ProjectBuilder Executing cleanup tasks...
🧪 Node.js API
Most UI5 Tooling modules provide JavaScript APIs for direct consumption in other Node.js projects. This allows you to rely on UI5 Tooling for UI5-specific build functionality and project handling, while creating your own tools to perfectly match the needs of your project.

All available APIs are documented in the UI5 Tooling API Reference.


ESM
CommonJS

import {graphFromPackageDependencies} from "@ui5/project/graph";

async function buildApp(projectPath, destinationPath) {
    const graph = await graphFromPackageDependencies({
        cwd: projectPath
    });
    await graph.build({
        destPath: destinationPath,
        selfContained: true,
        excludedTasks: ["transformBootstrapHtml"],
        includedDependencies: ["*"]
    });
}