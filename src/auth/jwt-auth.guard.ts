
import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    // format errors in gql friendly terms
    getRequest(context: ExecutionContext): Request {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}