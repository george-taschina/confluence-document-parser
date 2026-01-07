import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { AuthModule } from './commands/auth/auth.module';
import { ImportModule } from './commands/import/import.module';
import { StatusModule } from './commands/status/status.module';
import { ListModule } from './commands/list/list.module';
import { SpaceModule } from './commands/space/space.module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    ImportModule,
    StatusModule,
    ListModule,
    SpaceModule,
  ],
})
export class AppModule {}
