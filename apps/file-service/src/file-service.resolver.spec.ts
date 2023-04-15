import { Test, TestingModule } from '@nestjs/testing';
import { FileServiceResolver } from './file-service.resolver';
import { FileServiceService } from './file-service.service';

describe('FileServiceResolver', () => {
  let resolver: FileServiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileServiceResolver, FileServiceService],
    }).compile();

    resolver = module.get<FileServiceResolver>(FileServiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
