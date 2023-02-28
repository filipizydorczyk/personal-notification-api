import { Controller, Get } from '@nestjs/common';
import { RESTService } from 'src/services/rest.service';

@Controller('api/v1/filmweb')
export class FilmwebController {
  constructor(private readonly restService: RESTService) {}

  @Get('/rating')
  async getTodayMatches() {
    return await this.restService.getFilmwebRatings();
  }
}
