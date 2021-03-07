# TS Server ESM URL Plugin

This repository implements a TS Server plugin that adds partial support for URLs
in the ESM module statements. `?search` and `#fragment` at the end of a module
specifier is ignored for relative local file paths, preventing the module
resolution and type interference/tracing by the TypeScript language service from
breaking.

## Installation

Install through the [VS Code ESM URL extension](https://github.com/tomashubelbauer/vscode-esm-url).

To use standalone, install using `npm install tomashubelbauer/tsserver-esm-url`.

## Development

The prototyping and development of this plugin was done in this repository:
https://github.com/TomasHubelbauer/lsp-plugin

It is kinda of tricky to get this to run locally and debug it, please refer to
that repository for information on how to do it. This repository exists because
for the purposes of the VS Code extension, the plugin must be installable as a
NPM package and I don't intend on publishing the plugin to NPM so I am instead
leveraging the ability to install NPM dependencies as Git repositories. For that
though, the plugin's `index.js` needs to be at the root of the repository.
Extracting the plugin from the linked repository here acomplishes that.

## Purpose

Proper ESM URL support in TypeScript is probably months if not years away, this
PLUGIN fills the void until that is resolved. You can follow the progress along
here:

https://github.com/microsoft/TypeScript/issues/41730
