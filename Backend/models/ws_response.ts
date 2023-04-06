export interface IWsResponse {
  isSuccessful(): boolean;
  addSuccess(message: string): void;
  addWarning(message: string): void;
  addError(message: string): void;
  addResponse(data: any): void;
  getResponse(): any;
  toJson(): string;
}


class WsResponse implements IWsResponse {
  private successMessages: Array<string> = [];
  private warningMessages: Array<string> = [];
  private errorMessages: Array<string> = [];

  private response: any = {};

  public isSuccessful(): boolean {
    return this.errorMessages.length === 0;
  }

  public addSuccess(message: string): void {
    this.successMessages.push(message);
  }

  public addWarning(message: string): void {
    this.warningMessages.push(message);
  }

  public addError(message: string): void {
    this.errorMessages.push(message);
  }

  public addResponse(data: any): void {
    this.response = data;
  }

  public getResponse(): any {
    return this.response;
  }

  public toJson(): string {
    return JSON.stringify({
      isSuccessful: this.isSuccessful(),
      successMessages: this.successMessages,
      warningMessages: this.warningMessages,
      errorMessages: this.errorMessages,
      response: this.response,
    });
  }
}

export default WsResponse;