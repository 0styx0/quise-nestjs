import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // todo hide credentials
      url: 'mongodb://db_admin:db_password@localhost:27017/ecommerce?authSource=admin',
      database: 'ecommerce',
      synchronize: true, // todo change
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        // autogenerate ts defs
        path: join(process.cwd(), 'src/graphql.ts'),
        // enables the use of validation decorators https://docs.nestjs.com/graphql/resolvers#generating-types
        outputAs: 'class',
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
