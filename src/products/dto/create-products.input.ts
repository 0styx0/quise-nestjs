import { InputType, PickType } from '@nestjs/graphql';
import {
  IsCurrency,
  IsDecimal,
  IsInt,
  IsLowercase,
  IsNotEmpty,
  IsPositive,
  Matches,
  Min,
} from 'class-validator';
import { CreateProductInput, Product } from 'src/graphql';

export class CreateProductsInputDto extends CreateProductInput {
  declare name: string;

  @Matches(/^[a-z0-9]+(-[a-z0-9]+){0,2}$/)
  @IsLowercase()
  declare slug: string;

  declare description: string;

  @IsInt()
  @IsPositive()
  // cents
  declare price: number;

  @Matches(/^https:\/\/live\.staticflickr\.com\/.+\/.+$/)
  declare imageUrl: string;
}
