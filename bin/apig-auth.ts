#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ApigAuthStack } from "../lib/stack/apig-auth-stack";

const app = new cdk.App();
new ApigAuthStack(app, "ApigAuthStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
