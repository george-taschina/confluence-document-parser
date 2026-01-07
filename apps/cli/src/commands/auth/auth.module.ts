import { Module } from '@nestjs/common';
import { AuthCommand } from './auth.command';

@Module({
  providers: [AuthCommand],
})
export class AuthModule {}
