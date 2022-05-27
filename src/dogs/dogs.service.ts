import { Injectable } from '@nestjs/common';
import { IGetAllDogs } from './dogs.interfaces';
import axios from 'axios';
import { OutputDto } from './output.dto';
import { DogsClient } from './dogs.client';

@Injectable()
export class DogsService {
  constructor(private client: DogsClient) {}
  async callToApi() {
    const apiAwait = await this.client.get();
    console.log(apiAwait.data);
    const response: IGetAllDogs = apiAwait.data;
    return response;
  }
}
