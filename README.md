# grafana-volkovlabs-grapi-datasource

# 🚀 Grafana HTTP API Data Source for @grafana 🚀


https://github.com/coding-to-music/grafana-volkovlabs-grapi-datasource

From / By https://github.com/VolkovLabs/volkovlabs-grapi-datasource

My question:

https://github.com/VolkovLabs/volkovlabs-grapi-datasource/issues/35

## Environment variables:

```java
```

## user interfaces:

- Grafana http://localhost:3000

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/grafana-volkovlabs-grapi-datasource.git
git push -u origin main
```

## Steps to run 

yarn install

yarn build

yarn start

Open port 3000 if needed

Open grafana UI at http://localhost:3000

Authentication

The Data Source uses the internal backend proxy to avoid CORS restrictions and keep your credentials secured.

Generate a Token

The token can be generated from the Administration -> Service Accounts.

http://localhost:3000/admin

Generate a token at http://localhost:3000/org/serviceaccounts/2

Generate an API Key

API Key can be generated from the Configuration -> API Keys.



# Grafana HTTP API Data Source for Grafana

![Datasource](https://github.com/VolkovLabs/volkovlabs-grapi-datasource/raw/main/src/img/datasource.png)

[![Grafana 9](https://img.shields.io/badge/Grafana-9.4.7-orange)](https://www.grafana.com)
![CI](https://github.com/volkovlabs/volkovlabs-grapi-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-grapi-datasource/branch/main/graph/badge.svg)](https://codecov.io/gh/VolkovLabs/volkovlabs-grapi-datasource)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-grapi-datasource/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-grapi-datasource/actions/workflows/codeql-analysis.yml)

## Introduction

The Grafana HTTP API Data Source for Grafana allows retrieving data from local and remote Grafana instances via HTTP API.

## Requirements

- **Grafana 8.5+, Grafana 9.0+** is required.

## Getting Started

The Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.

For the latter, use the following command.

```bash
grafana-cli plugins install volkovlabs-grapi-datasource
```

## Features

- Connects to Local and Remote Grafana instances via HTTP API using API Keys and Tokens.
- Allows to get Health information.
- Allows to retrieve Annotations, Alerts, and Data Sources.

## Documentation

| Section                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| [Configuration](https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/configuration) | Explains configuration settings for the Data Source.         |
| [Provisioning](https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/provisioning) | Demonstrates how to automatically provision the Data Source. |
| [Release Notes](https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/release)     | Stay up to date with the latest features and updates.        |

### Features

| Section                    | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| [Annotations](https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/annotations) | Explains how to use the Data Source for Dashboard annotations. |

## Tutorial

This is an introductory video for anyone interested in Grafana Alerts and Annotations.

[![Annotations, Alerts, and Annotation queries in Grafana explained | HTTP API Data Source](https://raw.githubusercontent.com/volkovlabs/volkovlabs-grapi-datasource/main/img/annotations.png)](https://youtu.be/4asWJ_Dhcmw)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-grapi-datasource/blob/main/LICENSE).
