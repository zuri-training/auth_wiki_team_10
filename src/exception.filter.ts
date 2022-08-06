import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.error(exception);
    this.logger.debug(exception.stack);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception.response;
    let code =
      status === HttpStatus.INTERNAL_SERVER_ERROR
        ? 'general_internal_server_error'
        : 'general_validation_error';
    let message = exceptionResponse?.message;
    // our custom exception

    if (exceptionResponse?.code) {
      code = exceptionResponse.code;
    } else {
      message = JSON.stringify(message);
    }

    response.status(status).json({
      code,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
