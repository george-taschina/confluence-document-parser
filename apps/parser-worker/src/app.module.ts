import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ParserController } from './parser.controller';
import { ParserService } from './parser.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ParserController],
  providers: [ParserService],
})
export class AppModule {}
