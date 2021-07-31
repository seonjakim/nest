import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: 'seokim',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: 'hello@gmail.com',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: 'Harry',
    description: 'name',
  })
  name: string;
}
