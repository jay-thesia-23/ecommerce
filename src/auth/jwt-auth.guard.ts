import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { request, Response } from "express";


@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt"){

  handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext, status?: any): TUser {

    if(!user){
      console.log(user,"sdfudoifjsd");
      
      throw new UnauthorizedException()

    }else{
      const request=context.switchToHttp().getRequest();
      request.user=user
      console.log(user,"inside jwt auth guard");
      return user

    }
     
  }

  // async canActivate(context: ExecutionContext) {
  //   const result = (await super.canActivate(context)) as boolean;
  //   const request = context.switchToHttp().getRequest();
  //   await super.logIn(request);
  //   return result;
  // }
}