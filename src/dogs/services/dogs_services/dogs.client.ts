import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from 'src/config_service';

@Injectable()
export class DogsClient {
  async get(url) {
    const apiUrl = ConfigService.get('URL_API_POINT');
    const response = await axios.get(apiUrl + url);

    return response;
  }
}

//https://dog.ceo/api/breed/${breed}/images
