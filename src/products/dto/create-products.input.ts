import { InputType, PickType } from '@nestjs/graphql';
import {
  IsCurrency,
  IsDecimal,
  IsLowercase,
  IsNotEmpty,
  Matches,
  Min,
} from 'class-validator';
import { CreateProductInput, Product } from 'src/graphql';

@InputType()
export class CreateProductsInputDto extends CreateProductInput {
  declare name: string;

  @Matches(/^[a-z0-9]+(-[a-z0-9]+){0,2}$/)
  @IsLowercase()
  declare slug: string;

  declare description: string;

  @IsCurrency({ allow_negatives: false })
  declare price: number;

  @Matches(/^https:\/\/live\.staticflickr\.com\/.+\/.+$/)
  declare imageUrl: string;
}
