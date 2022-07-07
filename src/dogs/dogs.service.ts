import { Injectable } from '@nestjs/common';
import { IGetAllDogs } from './dogs.interfaces';
import { OutputDto } from './output.dto';
import { DogsClient } from './dogs.client';
import {
  fromBreedsImageResponseToEntity,
  fromDogsResponseToEntity,
} from './dogs.adapter';
import { Dog } from './dog';

@Injectable()
export class DogsService {
  constructor(private client: DogsClient) {}
  async callToApi() {
    const response = await this.client.get('breeds/list/all');
    // const response: IGetAllDogs = apiAwait.data;
    // return response;
    const entities = fromDogsResponseToEntity(response.data);
    //console.log(entities);
    return entities;
  }
  async callToImageBreed(breed) {
    const response = await this.client.get(`breed/${breed}/images`);
    const entities = fromBreedsImageResponseToEntity(response.data, breed);

    return entities;
  }
}
