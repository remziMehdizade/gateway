import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFileServiceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
