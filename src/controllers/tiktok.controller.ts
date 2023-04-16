import { Controller, Get, Query, Res } from '@nestjs/common';
import { WebService } from '../services/web.service';

@Controller('api/v1/tiktok')
export class TikTokController {
  constructor(private readonly webService: WebService) {}

  /**
   * can be used eg. `wget http://localhost:3000/api/v1/tiktok/video?url=https://www.tiktok.com/@technologymusic369/video/7142481537731136814`
   * @param query eq. `https://www.tiktok.com/@technologymusic369/video/7142481537731136814`
   * @param res reponse to use to redirect to just video
   */
  @Get('/video')
  async getVideoFromUrl(@Query('url') query: string, @Res() res) {
    const url = new URL(query);

    if (url.hostname.includes('tiktok')) {
      const videoUrl = await this.webService.getHtmlVideo(url);
      res.redirect(303, videoUrl);
    }
  }
}
