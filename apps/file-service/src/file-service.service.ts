import { Injectable } from '@nestjs/common';
import { CreateFileServiceInput } from './dto/create-file-service.input';
import { UpdateFileServiceInput } from './dto/update-file-service.input';

@Injectable()
export class FileServiceService {
  create(createFileServiceInput: CreateFileServiceInput) {
    return 'This action adds a new fileService';
  }

  findAll() {
    return `This action returns all fileService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileService`;
  }

  update(id: number, updateFileServiceInput: UpdateFileServiceInput) {
    return `This action updates a #${id} fileService`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileService`;
  }
}
