WSSnippets for Visual studio code
===========================

Visual Studio Code snippet plugin containing some very useful features.


## Features

Snippets for:
- Bricks
- Mjolnir 
- Font Awesome
- Material Icons
- Material Community Icons

`\[feature X\]\(images/feature-x.png\)`


## Setup (in 2 easy steps)

1. Install plugin
  1. Press `F1`, paste `ext install wssnippets` & then press `enter` (or)
  2. Goto extensions by pressing `Ctrl-Shift-X` (Windows/Linux) or `Cmd-Shift-X` (Mac) & Search for `WSSnippets`, click on install
2. Reload your editor
3. **You are good to go...**

## Contribution guidelines

1. Clone this repo
2. To modify snippets, you can find the templates for each snippet under `src/generators/`. These Html snippets must follow [sublime text snippet](http://docs.sublimetext.info/en/latest/extensibility/snippets.html) format. There is no need to update `snippets.json` manually. The build will take care of regenerating this file from template files.
3. If you need to change `README.md` (or) `package.json`, you should modify their templates (which are used to generate the root level files) under `files/`. For eg., If you want `package.json` at the root to be modified, you should change `package-template.json` under `files/`. These root level `package.json` & `README.md` are regenerated for every build from their corresponding templates.
4. To customize/create other generators, look at `source/util/config.js` or create your own customized generator as above mentioned. 
5. Send me a pull request

## Changelog
See [here](CHANGELOG.md)

## License

WSSnippets for Visual Studio Code plugin is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

**Enjoy!**

Description|Shortcut
:---|:---
@@DOCUMENTATION@@
