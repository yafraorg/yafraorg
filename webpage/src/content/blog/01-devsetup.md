---
title: Curated development tools
description: A set of selected frameworks to build your next solution
pubDate: 2025-02-08
tags:
  - tools
  - intro
---

# List of selected libraries, frameworks, runtimes, ...

Depending on your use case, the right selection of your development environment is key to speed up the delivery.

For all cases there are a bunch of samples in the yafra repositories. They are documented on other blog posts.

## Recommended development kits

A set of useful libraries to create server, frontends or API's. Main guidelines are documented as [instructions](.github/copilot-instructions.md), which can be used by AI.

### NodeJS

NodeJS is an efficient way to develop and run applications. It is used as development environment to build modern UI's / frontends. You will find some key frameworks here or in the [nodeJS instruction](.github/instructions/nodejs.instructions.md).

| Framework  | Link                                       | Language        | Usage          | Overview                                        |
| ---------- | ------------------------------------------ | --------------- | -------------- | ----------------------------------------------- |
| Astro      | https://astro.build                        | Typescript      | Web pages      | Static web page generation                      |
| Alpine.js  | https://alpinejs.dev                       | Typescript      | SPA            | Simple UI                                       |
| Angular    | https://angular.dev                        | Typescript      | SPA            | Enterprise UI Framework                         |

*SPA means Single Page Application*

It is convinient to use a manager software to switch between the nodejs versions. [fnm](https://github.com/schniz/fnm) is recommended.

### Python

Python is an easy to learn and extremly versatile programming language. It can be used for analytics, creating applications and simple UI's / frontends. You will find further information in the [python instruction](.github/instructions/python.instructions.md).

| Framework  | Link                                       | Language        | Usage          | Overview                                        |
| ---------- | ------------------------------------------ | --------------- | -------------- | ----------------------------------------------- |
| FastAPI    | https://fastapi.tiangolo.com               | Python          | Backend API    | RESTful API, GraphQL, ORM SQLAlchemy, ..        |
| PySide     | https://doc.qt.io/qtforpython-6/index.html | Python          | Fat Clients    | MacOS, Linux, Windows based on Qt               |
| Rich       | https://github.com/Textualize/rich         | Python          | CLI            | ASCII UI                                        |

It is convinient to use a manager software to switch between the python versions. [uv](https://github.com/astral-sh/uv) is recommended.

### .Net / C#

| Framework  | Link                                       | Language        | Usage          | Overview                                        |
| ---------- | ------------------------------------------ | --------------- | -------------- | ----------------------------------------------- |
| .NET Core  | https://dotnet.microsoft.com               | C#              | Backend API    | RESTful API, ORM                                |
| Avalonia UI | https://dotnet.microsoft.com              | C#              | Backend API    | RESTful API, ORM                                |


### Embedded and Home devices

| Framework  | Link                                       | Language        | Usage          | Overview                                        |
| ---------- | ------------------------------------------ | --------------- | -------------- | ----------------------------------------------- |
| Arduino    | https://github.com/arduino/arduino-cli     | C/C++           | Board          | Programming Arduino Boards / M5                 |
| NRF        | https://github.com/NordicSemiconductor     | C               | Board          | Nordic Semiconductor Boards                     |

## Recommended databases

SQLlite is preferred for local and simple setups. You do not even need a server :-) Large data storage is done on cloud like Azure Datalake. Run the databases within dockers during development or on the cloud.

| Database       | Link                                                  | Language | Usage                                   |
| -------------- | ----------------------------------------------------- | -------- | --------------------------------------- |
| MariaDB        | https://mariadb.org                                   | all      | Transactional data and queries, SQL     |
| SQLlite        | https://www.sqlite.org                                | all      | Small and in-memory database, SQL       |
| MongoDB        | https://www.mongodb.com                               | all      | Document oriented, transactions, NO-SQL |
| Redis          | https://redis.io                                      | all      | In-Memory, speed in mind, NO-SQL        |
| Azure Datalake | https://azure.microsoft.com/en-us/solutions/data-lake | all      | Lakehouse storage                       |

## Recommended AI frameworks

In order to use the latest llm's from https://huggingface.co/ use one of these AI toolsets to test them but as well to integrate them into your code.

| AI toolset | Link                | Language | Usage                                                             |
| ---------- | ------------------- | -------- | ----------------------------------------------------------------- |
| LM Studio  | https://lmstudio.ai | all      | Run https://huggingface.co models locally, emulates an OpenAI API |
| Ollma      | https://ollama.com  | Python   | Run LLAMA and other models locally                                |

## Recommended messaging / IoT

To store sensor or machine data the MQTT protocol is preferred.

| Cloud Service   | Link                                               | Language | Usage                                   |
| --------------- | -------------------------------------------------- | -------- | --------------------------------------- |
| Azure IoT       | https://azure.microsoft.com/en-us/products/iot-hub | all      | IoT with MQTT - cloud based             |
| Apache ActiveMQ | https://activemq.apache.org                        | all      | MQTT, AMQP, STOMP - on premises hosting |

## Recommended docker / container base images

Run local https://www.docker.com/ to create a cleaner development environment or host them within Kubernetes / Cloud facilities.

| Image        | Link                            | Usage                                           |
| ------------ | ------------------------------- | ----------------------------------------------- |
| Slim Debian  | https://hub.docker.com/_/debian | slim debian linux, based on standard libc       |
| Alpine Linux | https://hub.docker.com/_/alpine | linux based on musl libc, very small and secure |
