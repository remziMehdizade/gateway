import { CreateFileServiceInput } from './create-file-service.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFileServiceInput extends PartialType(CreateFileServiceInput) {
  @Field(() => Int)
  id: number;
}
