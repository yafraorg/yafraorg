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

## Recommended development libraries
A set of useful libraries to create server, frontends or API's.

Framework | Link | Language | Usage | Overview
-- | -- | -- | -- | --
FastAPI | https://fastapi.tiangolo.com | Python | Backend API | RESTful API, GraphQL, ORM SQLAlchemy, ..
.NET Core | https://dotnet.microsoft.com | C# | Backend API | RESTful API, ORM
PySide | https://doc.qt.io/qtforpython-6/index.html | Python | Fat Clients | MacOS, Linux, Windows based on Qt
ElectronJS | https://www.electronjs.org | JS / Typescript | Fat Clients | MacOS, Linux, Winodws based on HTML/CSS/JS
Astro | https://astro.build | Javascript | Static Webseite | Lots of templates and adding, can mix markdown
Angular | https://angular.dev | Typescript | SPA | Enterprise UI Framework
Alpine.js | https://alpinejs.dev | Typescript | SPA | Simple UI
Rich | https://github.com/Textualize/rich | Python | CLI | ASCII UI
Arduino | https://github.com/arduino/arduino-cli | C/C++ | Board | Programming Arduino Boards / M5
NRF | https://github.com/NordicSemiconductor | C | Board | Nordic Semiconductor Boards


## Recommended databases
SQLlite is preferred for local and simple setups. You do not even need a server :-)  Large data storage is done on cloud like Azure Datalake. Run the databases within dockers during development or on the cloud.

Database | Link | Language | Usage
-- | -- | -- | --
MariaDB | https://mariadb.org | all | Transactional data and queries, SQL
SQLlite | https://www.sqlite.org | all | Small and in-memory database, SQL
MongoDB | https://www.mongodb.com | all | Document oriented, transactions, NO-SQL
Redis | https://redis.io | all | In-Memory, speed in mind, NO-SQL
Azure Datalake | https://azure.microsoft.com/en-us/solutions/data-lake | all | Lakehouse storage

## Recommended AI frameworks
In order to use the latest llm's from https://huggingface.co/ use one of these AI toolsets to test them but as well to integrate them into your code.

AI toolset | Link | Language | Usage
-- | -- | -- | --
LM Studio | https://lmstudio.ai | all | Run https://huggingface.co models locally, emulates an OpenAI API
Ollma | https://ollama.com | Python | Run LLAMA and other models locally

## Recommended messaging / IoT
To store sensor or machine data the MQTT protocol is preferred.

Cloud Service | Link | Language | Usage
-- | -- | -- | --
Azure IoT | https://azure.microsoft.com/en-us/products/iot-hub | all | IoT with MQTT - cloud based
Apache ActiveMQ | https://activemq.apache.org | all | MQTT, AMQP, STOMP - on premises hosting

## Recommended docker / container base images
Run local https://www.docker.com/ to create a cleaner development environment or host them within Kubernetes / Cloud facilities.

Image | Link | Usage
-- | -- | --
Slim Debian | https://hub.docker.com/_/debian | slim debian linux, based on standard libc
Alpine Linux | https://hub.docker.com/_/alpine | linux based on musl libc, very small and secure