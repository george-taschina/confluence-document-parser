import { Test, TestingModule } from '@nestjs/testing';
import { UiService } from './ui.service';

describe('UiService', () => {
  let service: UiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UiService],
    }).compile();

    service = module.get<UiService>(UiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a spinner', () => {
    const spinner = service.spinner('Loading...');
    expect(spinner).toBeDefined();
    expect(spinner.text).toBe('Loading...');
  });

  it('should expose chalk', () => {
    expect(service.chalk).toBeDefined();
  });

  it('should have success method', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    service.success('Success message');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should have error method', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    service.error('Error message');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should have warn method', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    service.warn('Warning message');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should have info method', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    service.info('Info message');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
