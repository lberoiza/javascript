import e from "express";

class ServiceError {
  private error: string = '';


  public static fromError(error: unknown): ServiceError {
    console.log(error);

    if(error instanceof ServiceError)  return error;

    const serviceError: ServiceError = new ServiceError();
    if(error instanceof Error) {
      serviceError.setErrorMessage(error.message);
    } else {
      serviceError.setErrorMessage('Error Desconocido');
    }
    return serviceError;
  }


  private constructor(){
  }


  private setErrorMessage(error: string) {
    this.error = error;
  }


  public getErrorMessage(): string {
    return this.error;
  }
}

export default ServiceError;