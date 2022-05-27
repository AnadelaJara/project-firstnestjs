import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DogsClient {
  async get() {
    const apiAwait = await axios.get('https://dog.ceo/api/breeds/list/all');
    return apiAwait;
  }
}
