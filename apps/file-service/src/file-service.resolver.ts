import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FileServiceService } from './file-service.service';
import { FileService } from './entities/file-service.entity';
import { CreateFileServiceInput } from './dto/create-file-service.input';
import { UpdateFileServiceInput } from './dto/update-file-service.input';

@Resolver(() => FileService)
export class FileServiceResolver {
  constructor(private readonly fileServiceService: FileServiceService) {}

  @Mutation(() => FileService)
  createFileService(@Args('createFileServiceInput') createFileServiceInput: CreateFileServiceInput) {
    return this.fileServiceService.create(createFileServiceInput);
  }

  @Query(() => [FileService], { name: 'fileService' })
  findAll() {
    return this.fileServiceService.findAll();
  }

  @Query(() => FileService, { name: 'fileService' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fileServiceService.findOne(id);
  }

  @Mutation(() => FileService)
  updateFileService(@Args('updateFileServiceInput') updateFileServiceInput: UpdateFileServiceInput) {
    return this.fileServiceService.update(updateFileServiceInput.id, updateFileServiceInput);
  }

  @Mutation(() => FileService)
  removeFileService(@Args('id', { type: () => Int }) id: number) {
    return this.fileServiceService.remove(id);
  }
}
