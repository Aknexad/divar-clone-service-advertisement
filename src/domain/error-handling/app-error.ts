const httpCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  UN_AUTHORIZED: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: number;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    httpCode: number,
    isOperational: boolean,
    description: string
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export class ApiError extends AppError {
  constructor(
    name = 'Api Error',
    statusCode = httpCodes.INTERNAL_ERROR,
    isOperational = true,
    description = 'internal server error'
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class BadRequest extends AppError {
  constructor(
    name = 'Bad Request',
    statusCode = httpCodes.BAD_REQUEST,
    isOperational = true,
    description = 'bad request'
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class UnAuthorized extends AppError {
  constructor(
    name = 'UnAuthorized',
    statusCode = httpCodes.UN_AUTHORIZED,
    isOperational = true,
    description = 'unAuthorized'
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class NotFound extends AppError {
  constructor(
    name = 'Not Found',
    statusCode = httpCodes.NOT_FOUND,
    isOperational = true,
    description = 'file not found'
  ) {
    super(name, statusCode, isOperational, description);
  }
}
