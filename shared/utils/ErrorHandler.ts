// utils/ErrorHandler.ts
class ErrorHandler extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    // Optional: Capture the stack trace (excluding this constructor)
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
