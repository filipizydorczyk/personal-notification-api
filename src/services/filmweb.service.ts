import { Injectable } from '@nestjs/common';
import Axios from 'axios';

export type MovieRating = {
  rate: number;
  user: number;
  viewDate: number;
  timestamp: number;
};

/**
 * Stuff that is not important to me
 * is marked as `unknwon`
 */
export type MoviePreview = {
  year: number;
  entityName: string;
  coverPhoto: unknown;
  title: {
    title: string;
    country: string;
    lang: string;
  };
  originalTitle: {
    title: string;
    country: string;
    lang: string;
    original: boolean;
  };
  poster: {
    path: string;
  };
  genres: unknown;
  duration: number;
  mainCast: unknown;
};

// TODO consider making that repository
@Injectable()
export class FilmwebService {
  constructor() {}

  /**
   * This will return list of movies that I reated on filmweb
   * @returns tuple where first element is movie id, and the other
   * element is not important to me
   */
  getMyRatedMovieList() {
    return Axios.get<[number, number][]>(
      'https://www.filmweb.pl/api/v1/user/filip_izydorczyk/vote/film/',
    );
  }

  getMovieRating(id: number) {
    return Axios.get<MovieRating>(
      `https://www.filmweb.pl/api/v1/user/filip_izydorczyk/vote/film/${id}`,
    );
  }

  getMoviewPreview(id: number) {
    return Axios.get<MoviePreview>(
      `https://www.filmweb.pl/api/v1/film/${id}/preview`,
      {
        headers: { 'x-locale': 'en' },
      },
    );
  }
}
