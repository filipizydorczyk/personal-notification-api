import { Controller, Get, Query, Res } from '@nestjs/common';
import { WebService } from '../services/web.service';

@Controller('api/v1/instagram')
export class InstagramController {
  constructor(private readonly webService: WebService) {}

  /**
   * can be used eg. `wget http://localhost:3000/api/v1/instagram/video?url=https://www.instagram.com/p/Cokt0xHAY39/`
   * @param query eq. `https://www.instagram.com/p/Cokt0xHAY39/`
   * @param res reponse to use to redirect to just video
   */
  @Get('/video')
  async getVideoFromUrl(@Query('url') query: string, @Res() res) {
    const url = new URL(query);

    if (url.hostname.includes('instagram')) {
      const videoUrl = await this.webService.getHtmlVideo(url);
      res.redirect(303, videoUrl);
    }
  }
}
