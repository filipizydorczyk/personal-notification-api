import { Controller, Get } from '@nestjs/common';
import { VlrService } from './vlr.service';

@Controller()
export class VlrController {
  constructor(private readonly appService: VlrService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
