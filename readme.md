# TSServer ESM URL Plugin

This repository implements a TSServer plugin that adds partial support for URLs
in the ESM module statements. `?search` and `#fragment` at the end of a module
specifier is ignored for relative local file paths, preventing the module
resolution and type interference/tracing by the TypeScript language service from
breaking.

## Installation

[VS Code ESM URL extension]: https://github.com/tomashubelbauer/vscode-esm-url
Install through the [VS Code ESM URL extension].

To use standalone, install using `npm install tomashubelbauer/tsserver-esm-url`.

## Development

The prototyping and development of this plugin was done in this repository:
https://github.com/TomasHubelbauer/lsp-plugin

It's kinda tricky to get this to run locally and debug it, please refer to that
repository for information on how to do it.

This repository exists because for the purposes of the VS Code extension, the
plugin must be installable as an NPM package. I don't intend on publishing the
plugin to NPM so I am instead leveraging the ability to install Git repository
NPM dependency.

For that, the plugin's `index.js` needs to be at the root of the repository.
Extracting the plugin from the linked repository here acomplishes that.

## Purpose

ESM URL support in TypeScript is not there. This TSServer plugin fills the void.

## See also

[41730]: https://github.com/microsoft/TypeScript/issues/41730
[41730] VS Code issue for supporting local file URLs. Primarily about encoded
characters in the relative URLs. Also touches on absolute URLs with `file://`
protocol.

[35749]: https://github.com/microsoft/TypeScript/issues/35749
[35749] VS Code issue for HTTP(S) ESM URL support. This is an experimental
feature in Node 18.
