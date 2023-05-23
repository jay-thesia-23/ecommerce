import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ValidationPipe } from "@nestjs/common";
import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  // somewhere in your initialization file
  app.use(
    session({
      secret: "jay123456",
      resave: false,
      saveUninitialized: false,
     cookie:{
      maxAge:600000
     }
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.setBaseViewsDir(join(__dirname, "../views"));
  app.useStaticAssets(join(__dirname, "../assets"));
  app.setViewEngine("ejs");
  await app.listen(3000);
}

bootstrap();
