import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import env from "./env";

export const config: DynamoDBClientConfig = {
  region: env.AWS_DYNAMODB_REGION,
  credentials: {
    accessKeyId: env.AWS_DYNAMODB_KEY as string,
    secretAccessKey: env.AWS_DYNAMODB_SECRET as string,
  },
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

export default client;
