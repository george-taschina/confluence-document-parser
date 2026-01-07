import { Module } from '@nestjs/common';
import { SpaceCommand } from './space.command';
import { SpacesCommand } from './spaces.command';
import { ConfluenceModule } from '../../integrations/confluence/confluence.module';

@Module({
  imports: [ConfluenceModule],
  providers: [SpaceCommand, SpacesCommand],
})
export class SpaceModule {}
