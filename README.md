# AngularSeo

## About the project

This is a serverless Angular project boilerplate with server-side-rendering and PWA, running on AWS Lambda.

## Prerequisites

You need an AWS account with appropriate permissions on your computer. You'll also need to configure your [serverless credentials](https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/) to be able to deploy this project on your AWS account.
This project uses an existing Route53 hosted zone and a valid certificate to create the routing on Route53 hosted zone before the deploy. So you'll need to setup that in advance on your AWS account.

## Deploying the project

Install npm packages running `npm i`, then setup your enviroment following the [env setup](#setting-up-your-env-file) section.

Supposing you're going to setup your project on the development stage, run `npm createDomain:dev` to create the routing on Route53.

Finally, deploy your site with `npm run deploy:dev`.

## Testing PWA site

As of now, `ng serve` is not able to run the PWA version of the site, so you'll need to run the js file directly. To do so, you can run `npm run start:pwa`.

## Testing serverless site

Run `start:serverless`

## Setting up your env file

To setup your env, you need to create a `.env-cmdrc` file on your project root folder, following the template below:

```
{
  "dev": {
    "STAGE": "dev",
    "REGION": "REGION",
    "DOMAIN_NAME": "dev.example.com",
    "CERTIFICATE_NAME": "*.example.com",
    "HOSTED_ZONE_ID": "ZONE_ID"
  },
  "prod": {
    "STAGE": "prod",
    "REGION": "REGION",
    "DOMAIN_NAME": "www.example.com",
    "CERTIFICATE_NAME": "*.example.com",
    "HOSTED_ZONE_ID": "ZONE_ID"
  }
}
```

## Removing your project

Run `npm run remove:dev` and then remove Route53 routing with `npm run deleteDomain:dev`
