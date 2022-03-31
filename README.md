# ThePixarDB

**ThePixarDB** is an centralized database of the feature filmes, short filmes, collections, actors, directors and much more. We have all the data you'll ever need in one place, easily accessible through with a modern RESTful API.

**It is unofficial and we are made by fans to fans.**

This project is a RESTful API and will be a GraphQL API too.

## Setup Local - Docker and Compose 🗳️

We are using docker for create a local environment. The process is managed by Docker Compose.

This setup it's not recommend to create a production environment, for that we have a terraform module inside of the infra folder.

You can start everthing by:

```bash
docker-compose up --build
```

## Setup Local 🖥️

### Prerequisites 📝

Before you begin, ensure you have met the following requirements:

- You must have an AWS Credentials
- Configure the [AWS CLI](https://aws.amazon.com/pt/cli/)
- You have installed the [Node.js](https://nodejs.org/en/)
- You have installed the [Yarn](https://yarnpkg.com)
- You have installed the [Terraform](https://www.terraform.io)

### Create the infra on AWS 🏗️

```
cd infra && terraform init && terraform terraform apply -auto-approve
```

#### Install dependencies 🚀

```sh
$ yarn install
```

### Create configs

Create a `.env` file at the root of the project. Make sure you follow the [`.env.example`](.env.example) file as a guide.

### Run project

```sh
$ yarn dev
```

## Testing

## To know more

- [About](https://thepixardb.malaquias.dev/about/)
- [Features list]()

## Terms of Use

1. Free for non-commercial use.
2. You can make use of the API as data service.
3. ‘Hoarding’ or mass collection of data from this API is strictly prohibited.

## Legal Notice

We do not claim ownership of any of the images or data in the API. We comply with the Digital Millennium Copyright Act (DMCA) and expeditiously remove infringing content when properly notified. Any data and/or images you upload you expressly grant us a license to use. You are prohibited from using the images and/or data in connection with libelous, defamatory, obscene, pornographic, abusive or otherwise offensive content.

## How to contribute

Go to [contribute](.github/CONTRIBUTING.md)

## License

[![LICENSE](https://img.shields.io/badge/License-MIT_2.0-brightgreen.svg?style=for-the-badge&logo=bookstack&logoColor=white)](/LICENSE)
