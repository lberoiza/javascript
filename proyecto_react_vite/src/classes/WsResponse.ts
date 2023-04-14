import { FetchRequestResponse } from "./FetchRequest";


enum WsResponseStatus {
  DONE,
  PENDING
}

export type WsResponseObject = {
  successMessages: string[],
  warningMessages: string[],
  errorMessages: string[],
  response: any,
  status: WsResponseStatus
};


class WsResponse {


  private responseObject: WsResponseObject = {
    successMessages: [],
    warningMessages: [],
    errorMessages: [],
    response: null,
    status: WsResponseStatus.PENDING
  };


  public setFetchRequestResponse(response: FetchRequestResponse): WsResponse {
    this.responseObject.successMessages = response.successMessages;
    this.responseObject.warningMessages = response.warningMessages;
    this.responseObject.errorMessages = response.errorMessages;
    this.responseObject.response = response.response;
    this.responseObject.status = WsResponseStatus.DONE;
    return this;
  }

  public toState(): WsResponseObject {
    return structuredClone(this.responseObject);
  }


  public reset(): void {
    this.responseObject.successMessages = [];
    this.responseObject.warningMessages = [];
    this.responseObject.errorMessages = [];
    this.responseObject.response = null;
    this.responseObject.status = WsResponseStatus.PENDING;
  }


  public hasResponse(): boolean {
    return this.responseObject.response != null;
  }


  public hasErrors(): boolean {
    return this.responseObject.errorMessages.length > 0;
  }


  public isPending(): boolean {
    return this.responseObject.status === WsResponseStatus.PENDING;
  }


  public isDone(): boolean {
    return this.responseObject.status === WsResponseStatus.DONE;
  }


  public setPending(): void {
    this.responseObject.status = WsResponseStatus.PENDING;
  }


  public setDone(): void {
    this.responseObject.status = WsResponseStatus.DONE;
  }


  public addSuccess(message: string): void {
    this.responseObject.successMessages.push(message);
  }


  public addWarning(message: string): void {
    this.responseObject.warningMessages.push(message);
  }


  public addError(message: string): void {
    this.responseObject.errorMessages.push(message);
  }


  public addResponse(data: any): void {
    this.responseObject.response = data;
  }


  public getResponse(): any {
    return this.responseObject.response;
  }

  public getSuccessMessages(): string[] {
    return this.responseObject.successMessages;
  }


  public getWarningMessages(): string[] {
    return this.responseObject.warningMessages;
  }


  public getErrorMessages(): string[] {
    return this.responseObject.errorMessages;
  }

}

export default WsResponse;