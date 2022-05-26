import { Injectable } from '@nestjs/common';
import { IGetAllDogs } from './dogs.interfaces';
import axios from 'axios';
import { OutputDto } from './output.dto';

//const axios = require('axios').default;

@Injectable()
export class DogsService {
  create(bodyPerrete: OutputDto): void | PromiseLike<void> {
    throw new Error('Method not implemented.');
  }
}

export async function callToApi() {
  const apiAwait = await axios.get('https://dog.ceo/api/breeds/list/all');
  console.log(apiAwait.data);
  const response: IGetAllDogs = apiAwait.data;
  return response;
}
