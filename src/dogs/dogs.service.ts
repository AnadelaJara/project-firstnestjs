import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { IGetAllDogs } from './dogs.interfaces';

const axios = require('axios').default;

@Injectable()
export class DogsService {}

export async function callToApi() {
  const apiAwait = await axios.get('https://dog.ceo/api/breeds/list/all');
  console.log(apiAwait.data);
  const response: IGetAllDogs = apiAwait.data;
  return response.message.malamute;
}
