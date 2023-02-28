import { Controller, Get } from '@nestjs/common';
import { WebService } from '../services/web.service';

@Controller('api/v1/vlr')
export class VlrController {
  constructor(private readonly webService: WebService) {}

  @Get('/today')
  async getTodayMatches(): Promise<Buffer> {
    const img = await this.webService.getTodayValorantMatches();
    return img;
  }
}
