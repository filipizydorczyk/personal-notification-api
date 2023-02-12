import { Module } from '@nestjs/common';
import { VlrController } from './vlr.controller';
import { VlrService } from './vlr.service';

@Module({
  imports: [],
  controllers: [VlrController],
  providers: [VlrService],
})
export class AppModule {}
