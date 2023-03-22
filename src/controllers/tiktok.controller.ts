import { Controller, Get, Query, Res } from '@nestjs/common';
import { WebService } from '../services/web.service';

@Controller('api/v1/tiktok')
export class TikTokController {
  constructor(private readonly webService: WebService) {}

  @Get('/video')
  async getVideoFromUrl(@Query('url') query: string, @Res() res) {
    const url = new URL(query);

    if (url.hostname.includes('tiktok')) {
      const videoUrl = await this.webService.getHtmlVideo(url);
      res.redirect(303, videoUrl);
    }
  }
}
