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
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { ReadOnlyCatDto } from 'src/dto/cat.dto';
import { CatRequestDto } from 'src/dto/cats.request.dto';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'get current cat info' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@CurrentUser() cat) {
    return cat.readOnlyData;
  }

  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '200Ok!',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: 'for sign up' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: 'for sign in' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
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
