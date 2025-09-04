import { IsArray, ArrayNotEmpty, ValidateNested, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

import { ObjectId } from 'mongodb';

export class CheckoutProductDto {
    @IsMongoId()
    id: ObjectId;
}

export class CreateCheckoutInput {
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CheckoutProductDto)
    products: CheckoutProductDto[];
}
