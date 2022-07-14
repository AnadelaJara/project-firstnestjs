import { Controller, Get } from '@nestjs/common';
import { ConfigService } from 'src/config_service';

@Controller('config')
export class ConfigServiceController {
  @Get()
  async getGreetingMessage() {
    const greetingMessage = ConfigService.get('MY_NAME');
    console.log(greetingMessage);

    return greetingMessage;
  }
}
