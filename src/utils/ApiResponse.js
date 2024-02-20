class ApiResponse {
  constructor(statusCode, data, message = "Success!") {
    this.data = data;
    this.success = success;
    this.message = message;
    this.statusCode = statusCode < 400;
  }
}

export { ApiResponse };
