import { Injectable } from '@nestjs/common';
import { IGetAllDogs } from './dogs.interfaces';
import axios from 'axios';
import { OutputDto } from './output.dto';
import { DogsClient } from './dogs.client';
import { fromDogsResponseToEntity } from './dogs.adapter';
import { Dog } from './dog';

@Injectable()
export class DogsService {
  constructor(private client: DogsClient) {}
  async callToApi() {
    const apiAwait = await this.client.get();
    // const response: IGetAllDogs = apiAwait.data;
    // return response;
    const entities = fromDogsResponseToEntity(apiAwait.data);
    //console.log(entities);
    return entities;
  }
}
