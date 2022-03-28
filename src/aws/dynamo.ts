import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();
const dynamodb = new AWS.DynamoDB({ region: process.env.AWS_REGION });

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
