import { Controller, Get } from "@nestjs/common";

@Controller('/app') // /app/home
export class AppController {
  
  @Get('/home') //  /home
  getRootRoute() {
    return "Hello world!"
  }

  @Get('/about')
  getAboutRoute() {
    return "About"
  }
}