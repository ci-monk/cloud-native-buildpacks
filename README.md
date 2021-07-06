<p align="center">
  <img alt="azure" src="https://media.tenor.com/images/2c93fcb4628fab700db569d0ab58d6b5/tenor.gif" width="350px" float="center"/>
</p>

<h2 align="center">🔥 Cloud Native Buildpacks 🔥</h2>

<div align="center">

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/lpmatos/samples-cnb)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/lpmatos/samples-cnb)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/lpmatos/samples-cnb)

</div>

---

<p align="center">
  <img alt="pipelines" src="https://thumbs.gfycat.com/GrizzledRemoteHornet-small.gif" width="450px" float="center"/>
</p>

<p align="center">  
  ✨ My personal Cloud Native Buildpacks examples ✨
</p>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#authors">Authors</a>
</p>

---

## ➤ Getting Started <a name = "getting-started"></a>

If you want contribute on this project, first you need to make a **git clone**:

>
> 1. git clone --depth 1 <https://github.com/lpmatos/samples-cnb.git> -b master
>

This will give you access to the code on your **local machine**.

## ➤ Prerequisites <a name = "prerequisites"></a>

Before starting to develop you need to install some tools on your local machine:

### Build tools

- **pack**

### Support tools 

- **npm**, **make**, **gitleaks**

For more information, access the [CONTRIBUTING](CONTRIBUTING.md) file.

## ➤ Installing <a name = "installing"></a>

### Support dependencies

To install support dependencies that handle commit and release standards, run the command:

```bash
make install
```

This shareable configuration use the following dependencies:

- ⮚ [Semantic Release](https://github.com/semantic-release) + Plugins de configuração
  - [`semantic-release`](https://github.com/semantic-release/semantic-release)
  - [`@semantic-release/git`](https://github.com/semantic-release/git)
  - [`@semantic-release/github`](https://github.com/semantic-release/github)
  - [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
  - [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
  - [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- ⮚ [Commit Lint](https://github.com/conventional-changelog/commitlint) usando o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
  - [`commitizen`](https://github.com/commitizen/cz-cli)
  - [`@commitlint/cli`](https://github.com/conventional-changelog/commitlint)
  - [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint)
- ⮚ Git Hooks com [Husky](https://github.com/typicode/husky).
  - [`husky`](https://github.com/semantic-release/git)

For more information, access the [CONTRIBUTING](CONTRIBUTING.md) file.

### Git Hooks

Configure husky `commit-msg` and `pre-commit` hooks:

```bash
bash scripts/hooks.sh
```

## ➤ Samples <a name = "samples"></a>

### Bash

* [Simple](/bash)

### Node.js

* [No Package Manager](/node/no-package-manager)
* [Yarn](/node/yarn)

### Nginx

* [Simple](/nginx)

### Dotnet

* [Runtime-only](/dotnet)

### Go

* [No Imports](/go/no-imports)
* [Mod](/go/mod)

### Python

* [Flask](/python)

### Ruby

* [Rake](/ruby/rake)
* [Unicorn](/ruby/unicorn)

## ➤ Author <a name = "author"></a>

👤 **Lucca Pessoa**

Hey!! If you like this project or if you find some bugs feel free to contact me in my channels:

>
> * Email: luccapsm@protonmail.com
> * Website: https://linktr.ee/lpmatos
> * Github: [@lpmatos](https://github.com/lpmatos)
> * GitLab: [@lpmatos](https://gitlab.com/lpmatos)
> * LinkedIn: [@luccapessoa](https://www.linkedin.com/in/luccapessoa/)
>

## ➤ Versioning <a name = "versioning"></a>

To check the change history, please access the [**CHANGELOG.md**](CHANGELOG.md) file.

## ➤ Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome. Feel free to check issues page if you want to contribute. [Check the contributing guide](CONTRIBUTING.md).

## ➤ Troubleshooting <a name = "troubleshooting"></a>

If you have any problems, please contact [me](luccapsm@protonmail.com).

## ➤ License <a name = "license"></a>

This repository is released under the [MIT license](https://opensource.org/licenses/MIT). In short, this means you are free to use this software in any personal, open-source or commercial projects. Attribution is optional but appreciated.

## ➤ Show your support <a name = "show-your-support"></a>

Give a ⭐️ if this project helped you!

---

Made with 💜 by [me](https://github.com/lpmatos) :wave: inspired on [readme-md-generator](https://github.com/kefranabg/readme-md-generator)
