import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ImageMiddleware } from './middlewares/image.middleware';
import { VlrController } from './controllers/vlr.controller';
import { WebService } from './services/web.service';
import { GitHubController } from './controllers/github.controller';
import { FilmwebController } from './controllers/filmweb.controller';
import { RESTService } from './services/rest.service';
import { FilmwebService } from './services/filmweb.service';
import { TikTokController } from './controllers/tiktok.controller';
import { InstagramController } from './controllers/instagram.controller';

@Module({
  imports: [],
  controllers: [
    VlrController,
    GitHubController,
    FilmwebController,
    TikTokController,
    InstagramController,
  ],
  providers: [WebService, RESTService, FilmwebService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ImageMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
