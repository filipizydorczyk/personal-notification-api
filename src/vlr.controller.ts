import { Controller, Get } from '@nestjs/common';
import { VlrService } from './vlr.service';

@Controller('v1/vlr')
export class VlrController {
  constructor(private readonly vlrService: VlrService) {}

  @Get('/today')
  async getTodayMatches(): Promise<Buffer> {
    const img = await this.vlrService.getTodayMatches();
    return img;
  }
}
