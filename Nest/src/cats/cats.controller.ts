import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'all cat';
  }

  @Post()
  async signUp() {
    return 'create cat';
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }

  // @Get(':id')
  // getOneCat(@Param('id', ParseIntPipe) param) {
  //   console.log(param);
  //   console.log(typeof param);
  //   return 'one cat';
  // }

  // @Put(':id')
  // updateCat() {
  //   return 'update cat';
  // }

  // @Patch(':id')
  // updatePartialCat() {
  //   return 'update';
  // }

  // @Delete(':id')
  // deleteCat() {
  //   return 'delete';
  // }
}