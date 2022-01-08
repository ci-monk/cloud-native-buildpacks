<p align="center">
  <img alt="azure" src="https://media.tenor.com/images/2c93fcb4628fab700db569d0ab58d6b5/tenor.gif" width="350px" float="center"/>
</p>

<h2 align="center">🔥 Cloud native buildpacks 🔥</h2>

<div align="center">

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)]()
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/lpmatos/scloud-native-buildpacks)

</div>

---

<p align="center">
  <img alt="pipelines" src="https://thumbs.gfycat.com/GrizzledRemoteHornet-small.gif" width="450px" float="center"/>
</p>

<p align="center">
  ✨ A collection of examples using cloud native buildpacks ✨
</p>

<p align="center">
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#concepts">Concepts</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#versioning">Versioning</a>
</p>

---

## ➤ Getting Started <a name = "getting-started"></a>

If you want contribute on this project, first you need to make a **git clone**:

>
> 1. git clone --depth 1 <https://github.com/lpmatos/cloud-native-buildpacks.git> -b main
>

This will give you access to the code on your **local machine**.

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

## ➤ Concepts <a name = "concepts"></a>

This section aims to describe at a high level what the tools we use are and how we use them, without reproducing documentation that is better written (and more up to date) in the repositories and websites of these tools themselves. It's recommended to familiarize yourself with these tools as early as possible.

### What are buildpacks?

Buildpacks allow you to convert your source code into a secure, efficient, production ready container image. It provides a framework and runtime support for applications and examine your apps to determine all the dependencies it needs and configure them appropriately to run on any cloud.

### How do they work?

Each buildpack comprises of two phases:

**Detect phase**

The detect phase runs against your source code to determine if the buildpack is applicable or not. Once a buildpack is detected to be applicable, it proceeds to the build stage. If the project fails detection the build stage for a specific buildpack is skipped. For example:

- A Python buildpack may look for a requirements.txt or a setup.py file pass
- A Node buildpack may look for a package-lock.json file to pass

**Build phase**

The build phase runs against your source code to:

- Set up the build-time and run-time environment
- Download dependencies and compile your source code (if needed)
- Set appropriate entry point and startup scripts

For example:

- A Python buildpack may run pip install -r requirements.txt if it detected a requirements.txt file
- A Node buildpack may run npm install if it detected a package-lock.json file

### What is a builder?

Builders are an ordered combination of buildpacks with a base build image, a lifecycle, and a reference to a run image. They take in your app source code and build the output app image. The build image provides the base environment for the builder (for eg. an Ubuntu Bionic OS image with build tooling) and a run image provides the base environment for the app image during runtime. A combination of a build image and a run image is called a stack.

Under the hood a builder uses the lifecycle to run the detect phase for all the buildpacks it contains in order and then proceeds to run the build phase of all the buildpacks that passed detection. This allows us to have a single builder that can detect and build various kinds of applications automatically.

For example, let's say demo-builder contains the Python and Node buildpack. Then:

- If your project just has a requirements.txt, demo-builder will only run the Python build steps.
- If your project just has a package-lock.json, demo-builder will only run the Node build steps.
- If your project has both package-lock.json and requirements.txt, demo-builder will run both the Python and Node build steps.
- If your project has no related files, demo-builder will fail to detect and exit.

## ➤ TD;DR

In the buildpacks we have components and operations:

- Components:
  - Buildpack: A buildpack is a set of executables that inspects your app source code and create a plan to build and run your application.
  - Lifecycle: The lifecycle orchestrates buildpack execution, then assembles the resulting artifacts into a final app image.
  - Builder: A builder is an image that contains all the components necessary to execute a build. A builder image is created by taking a build image and adding a lifecycle, buildpacks, and files that configure aspects of the build including the buildpack detection order and the location(s) of the run image
  - Buildpack Group: A buildpack group is a list of specific buildpacks composed together in an order such that the list is suitable for building an application. Because buildpacks are modular and reusable, a buildpack group is what allows you to connect multiple modular buildpacks together.
  - Platform: A platform uses a lifecycle, buildpacks (packaged in a builder), and application source code to produce an OCI image.
  - Stack: A stack is composed of two images that are intended to work together: The build image of a stack provides the base image from which the build environment is constructed. The build environment is the containerized environment in which the lifecycle (and thereby buildpacks) are executed. The run image of a stack provides the base image from which application images are built.
- Operations:
  - Build: Build is the process of executing one or more buildpacks against the app's source code to produce a runnable OCI image.
  - Rebase: Rebase allows app developers or operators to rapidly update an app image when its stack's run image has changed.

## ➤ Author <a name = "author"></a>

👤 Hey!! If you like this project or if you find some bugs feel free to contact me in my channels:

>
> * Linktree: https://linktr.ee/lpmatos
>

## ➤ Versioning <a name = "versioning"></a>

To check the change history, please access the [**CHANGELOG.md**](CHANGELOG.md) file.

## ➤ Project status <a name = "project-status"></a>

This repository is a study project, so it will not always be maintained 👻.

## ➤ Donations <a name = "donations"></a>

Please consider [donating to the xmrig team](https://github.com/xmrig/xmrig#donations), and if you find this docker image useful, donations for work on dockerizing the build and mining app are appreciated at any of the folllowing addresses:

<p align="center">
  <a href="https://www.blockchain.com/pt/btc/address/bc1qn50elv826qs2qd6xhfh6n79649epqyaqmtwky5">
    <img alt="BTC Address" src="https://img.shields.io/badge/BTC%20Address-black?style=for-the-badge&logo=bitcoin&logoColor=white">
  </a>

  <a href="https://live.blockcypher.com/ltc/address/ltc1qwzrxmlmzzx68k2dnrcrplc4thadm75khzrznjw/">
    <img alt="Litecoin Address" src="https://img.shields.io/badge/Litecoin%20Address-black?style=for-the-badge&logo=litecoin&logoColor=white">
  </a>
</p>

## ➤ Show your support <a name = "show-your-support"></a>

<div align="center">

Give me a ⭐️ if this project helped you!

<p>
  <img alt="gif-header" src="https://www.icegif.com/wp-content/uploads/baby-yoda-bye-bye-icegif.gif" width="350px" float="center"/>
</p>

Made with 💜 by [me](https://github.com/lpmatos) 👋 inspired on [readme-md-generator](https://github.com/kefranabg/readme-md-generator)

</div>

