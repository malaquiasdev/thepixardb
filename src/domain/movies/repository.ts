import { executePartiQL } from '../../aws/dynamo';
import { MovieModel } from './movies';

export async function findMoviesBy(tableName: string, language?: string): Promise<MovieModel[]> {
  const query = `SELECT * FROM ${tableName} WHERE "sk" = 'LANGUAGE#${language}' `;
  return await executePartiQL(query);
}

export async function findMovieBy(tableName: string, id: string, language?: string): Promise<MovieModel> {
  const query = `SELECT * FROM ${tableName} WHERE "pk" = '${id}' AND "sk" = 'LANGUAGE#${language}'`;
  const result = await executePartiQL(query);
  return result[0];
}
