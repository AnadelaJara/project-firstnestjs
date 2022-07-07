import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DogsClient {
  async get(url) {
    const response = await axios.get('https://dog.ceo/api/' + url);
    return response;
  }
}

//https://dog.ceo/api/breed/${breed}/images
