import { Injectable } from '@nestjs/common';
import { FilmwebService } from './filmweb.service';

export type MovieRating = {
  title: string;
  photo: string;
  rating: number;
};

@Injectable()
/**
 * This calss exists for all stuff I am gonna get from
 * existing REST APIs. If I need to call more than one endpoint
 * to get what I want from the API it should get deticated
 * service for that eg. `FilmwebService`
 */
export class RESTService {
  constructor(private readonly filmwebService: FilmwebService) {}

  async getFilmwebRatings(): Promise<MovieRating[]> {
    const ratings = await this.filmwebService.getMyRatedMovieList();

    const response = Promise.all(
      ratings.data.map(async (rate) => {
        const id = rate[0];

        const { data: fetchedRating } =
          await this.filmwebService.getMovieRating(id);
        const { data: moviePreview } =
          await this.filmwebService.getMoviewPreview(id);

        return {
          title: moviePreview.originalTitle.title,
          photo: moviePreview.poster.path,
          rating: fetchedRating.rate,
        };
      }),
    );

    return response;
  }
}
