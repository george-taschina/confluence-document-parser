import { IsString, IsObject, IsEnum } from 'class-validator';

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

  @IsObject()
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
