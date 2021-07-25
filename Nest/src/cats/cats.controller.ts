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
  Body,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatRequestDto } from 'src/dto/cats.request.dto';
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
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
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
