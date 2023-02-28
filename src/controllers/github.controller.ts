import { Controller, Get } from '@nestjs/common';
import { WebService } from '../services/web.service';

@Controller('api/v1/github')
export class GitHubController {
  constructor(private readonly webService: WebService) {}

  @Get('/heatmap')
  async getTodayMatches(): Promise<Buffer> {
    const img = await this.webService.getGitHubHeatMap();
    return img;
  }
}
