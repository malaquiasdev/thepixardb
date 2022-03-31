import AWS from 'aws-sdk';
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';

import dotenv from 'dotenv';

dotenv.config();

let dynamodb = null;

if (process.env.NODE_ENV === 'local') {
  const options: ServiceConfigurationOptions = {
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
  };
  dynamodb = new AWS.DynamoDB(options);
} else {
  dynamodb = new AWS.DynamoDB({ region: process.env.AWS_REGION });
}

function _unmarshall(data: any): any {
  return AWS.DynamoDB.Converter.unmarshall(data);
}

function _convertRecords(data: any): any {
  if (!data) return undefined;
  if (Array.isArray(data)) return _convertRecordsToArray(data);
  return _unmarshall(data);
}

function _convertRecordsToArray(data: any): any[] {
  if (!data) return undefined;
  return data.map(item => _unmarshall(item));
}

export async function executePartiQL(query: string): Promise<any[]> {
  const data = [];
  let nextTokenRun = null;
  do {
    const { Items, NextToken } = await dynamodb
      .executeStatement({
        Statement: query,
        NextToken: nextTokenRun,
      })
      .promise();

    data.push(...Items);
    nextTokenRun = NextToken;
  } while (nextTokenRun);
  return _convertRecords(data);
}
