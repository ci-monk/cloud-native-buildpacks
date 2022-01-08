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
  ✨ A collection of examples using <a href="https://buildpacks.io/">cloud native buildpacks</a> ✨
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

## ➤ Pre-Requisites <a name = "pre-requisites"></a>

- [Docker](https://docs.docker.com/)
- [Pack](https://buildpacks.io/docs/tools/pack/)

## ➤ Description <a name = "description"></a>

The goal of the Cloud Native Buildpacks (CNB) project is to translate source code into container images with a focus on developer productivity, container security, and operations involving containerized applications at scale. The project also aims to unify the buildpack ecosystems of the past with a well-defined contract ideal for modern cloud native platforms.

“Cloud Native Buildpacks enable developers to work at whichever layer of abstraction is most productive for them while solving big problems like vulnerable dependencies and slow builds,” said Emily Casey, Buildpacks maintainer and staff engineer at VMware. “The project’s robust specification and tools have helped facilitate an ecosystem of composable buildpacks that interoperate with diverse platforms. We are excited to continue to grow the community as Buildpacks moves to incubation.”

Cloud Native Buildpacks were accepted into the CNCF Sandbox in October 2018. Buildpacks are used in production by end user organizations, including Greenhouse, Salesforce, and VMware; in cloud native open source software Cloud Foundry on K8s, Google Skaffold, Hashicorp Waypoint, and kpack; and in commercial offerings including DigitalOcean App Platform, Google Cloud, Salesforce Evergreen, and VMware Tanzu Build Service.

“Developers shouldn’t have to think about how to package their applications for deployment, so I’m excited to see Cloud Native Buildpacks promoted to a CNCF incubation project,” said James Ward, developer advocate, Google Cloud. “At Google Cloud, we’ve open sourced our Buildpacks and added support for them into numerous products, including Cloud Build, Cloud Run, App Engine, Cloud Functions, Cloud Code, Cloud Shell, and Skaffold. Now going from source to running on the cloud is even easier.”

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
* [Puma](/ruby/puma)

## ➤ Concepts <a name = "concepts"></a>

This section aims to describe at a high level what the tools we use are and how we use them, without reproducing documentation that is better written (and more up to date) in the repositories and websites of these tools themselves. It's recommended to familiarize yourself with these tools as early as possible.

The Cloud Native Buildpacks project is complementary to other CNCF projects, including Helm, Harbor, and Kubernetes. Cloud Native Buildpacks produce Open Container Initiative (OCI) images managed by Helm, stored in Harbor, and deployed to Kubernetes. The project’s overarching goal is to provide a reliable, safe, modular, and fast way to build OCI images from source or input artifacts

### Why Are They Important?

There are two things to consider when discussing the value of Cloud Native Buildpacks: how the container is created, and how the container is maintained.

If you’ve created a container using Dockerfile before, you’re already familiar with the decisions you need to make. You need to decide which base image to base your container on and which version of that image to use, and then ensure it has the proper versions of all the dependencies that your application relies on. After that, you need to bring in the additional dependencies and runtimes, build your application, and then slim down your container image to ensure it’s as lean and quick as possible.

Cloud Native Buildpacks know how to build and containerize your application. If it’s a Java app, they will bring in the JVM. If it’s a Ruby app, they will bring in the Ruby runtime.

Your container also needs to be maintained. Throughout the entire stack—from the base image to dependencies to your application runtime—it’s important to keep things up to date and secure. Since Cloud Native Buildpacks separate out the base image, the runtime, and your application into different layers, they’re very quick to update only the layers that changed.

### What are buildpacks?

Buildpacks allow you to convert your source code into a secure, efficient, production ready container image. It provides a framework and runtime support for applications and examine your apps to determine all the dependencies it needs and configure them appropriately to run on any cloud.

### How do they work?

Cloud Native Buildpacks are an abstract lifecycle, so they are more of a definition than an implementation. Each buildpack comprises of two phases:

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

That lifecycle is broken down into four steps:

1. **Detection**: Automatically determines which buildpacks are required to build the application.
2. **Analysis**: If any layer can be reused from a previous build, pulls it from the cache. (This helps optimize the build process.)
3. **Build**: Creates the runnable artifacts from your application’s source code
4. **Export**: Creates the final OCI-compliant image.

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
  - **Buildpack**: A buildpack is a set of executables that inspects your app source code and create a plan to build and run your application.
  - **Lifecycle**: The lifecycle orchestrates buildpack execution, then assembles the resulting artifacts into a final app image.
  - **Builder**: A builder is an image that contains all the components necessary to execute a build. A builder image is created by taking a build image and adding a lifecycle, buildpacks, and files that configure aspects of the build including the buildpack detection order and the location(s) of the run image
  - **Buildpack Group**: A buildpack group is a list of specific buildpacks composed together in an order such that the list is suitable for building an application. Because buildpacks are modular and reusable, a buildpack group is what allows you to connect multiple modular buildpacks together.
  - **Platform**: A platform uses a lifecycle, buildpacks (packaged in a builder), and application source code to produce an OCI image.
  - **Stack**: A stack is composed of two images that are intended to work together: The build image of a stack provides the base image from which the build environment is constructed. The build environment is the containerized environment in which the lifecycle (and thereby buildpacks) are executed. The run image of a stack provides the base image from which application images are built.
- Operations:
  - **Build**: Build is the process of executing one or more buildpacks against the app's source code to produce a runnable OCI image.
  - **Rebase**: Rebase allows app developers or operators to rapidly update an app image when its stack's run image has changed.

## ➤ Useful Links <a name = "useful-links"></a>

- [CNB root documentation](https://buildpacks.io/)
- [Tanzu article](https://tanzu.vmware.com/developer/guides/cnb-what-is/)
- [CNCF article](https://www.cncf.io/blog/2020/11/18/toc-approves-cloud-native-buildpacks-from-sandbox-to-incubation/)
- [Google article](https://cloud.google.com/blog/products/containers-kubernetes/google-cloud-now-supports-buildpacks)
- [AWS article](https://aws.amazon.com/blogs/containers/creating-container-images-with-cloud-native-buildpacks-using-aws-codebuild-and-aws-codepipeline/)

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

