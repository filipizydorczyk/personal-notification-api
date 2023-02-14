import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ImageMiddleware } from './image.middleware';
import { VlrController } from './vlr.controller';
import { VlrService } from './vlr.service';

@Module({
  imports: [],
  controllers: [VlrController],
  providers: [VlrService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ImageMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
