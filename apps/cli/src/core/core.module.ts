import { Global, Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { UiModule } from './ui/ui.module';
import { ErrorHandlerService } from './error/error-handler.service';
import { HttpService } from './http/http.service';

@Global()
@Module({
  imports: [ConfigModule, UiModule],
  providers: [ErrorHandlerService, HttpService],
  exports: [ConfigModule, UiModule, ErrorHandlerService, HttpService],
})
export class CoreModule {}
