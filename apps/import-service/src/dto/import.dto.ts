import { IsString, IsObject, IsEnum, ValidateNested, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';

export enum SourcePlatform {
  CONFLUENCE = 'confluence',
  GDOCS = 'gdocs',
}

export class PageData {
  @IsString()
  id!: string;

  @IsString()
  title!: string;

  @IsString()
  content!: string;

  @IsString()
  spaceKey!: string;
}

export class ImportDocumentDto {
  @IsEnum(SourcePlatform)
  source!: SourcePlatform;

  @IsDefined()
  @ValidateNested()
  @Type(() => PageData)
  page!: PageData;
}

export class ImportResponseDto {
  success!: boolean;
  importId!: string;
  status!: 'pending' | 'processing' | 'completed' | 'failed';
  message!: string;
}

export class ImportStatusDto {
  importId!: string;
  status!: 'pending' | 'processing' | 'completed' | 'failed';
  parsedContent?: any;
  storageUrl?: string;
  error?: string;
}
