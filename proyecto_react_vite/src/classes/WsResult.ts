import { FetchRequestResponse } from "./FetchRequest";


enum WsResultStatus {
  DONE,
  PENDING
}

export type WsResultObject = {
  successMessages: string[],
  warningMessages: string[],
  errorMessages: string[],
  response: any,
  status: WsResultStatus
};


class WsResult {


  private innerState: WsResultObject = {
    successMessages: [],
    warningMessages: [],
    errorMessages: [],
    response: null,
    status: WsResultStatus.PENDING
  };


  public setFetchRequestResponse(response: FetchRequestResponse): WsResult {
    this.innerState.successMessages = response.successMessages;
    this.innerState.warningMessages = response.warningMessages;
    this.innerState.errorMessages = response.errorMessages;
    this.innerState.response = response.response;
    this.innerState.status = WsResultStatus.DONE;
    return this;
  }

  public toState(): WsResultObject {
    return structuredClone(this.innerState);
  }


  public reset(): void {
    this.innerState.successMessages = [];
    this.innerState.warningMessages = [];
    this.innerState.errorMessages = [];
    this.innerState.response = null;
    this.innerState.status = WsResultStatus.PENDING;
  }


  public hasResponse(): boolean {
    return this.innerState.response != null;
  }


  public hasErrors(): boolean {
    return this.innerState.errorMessages.length > 0;
  }


  public isPending(): boolean {
    return this.innerState.status === WsResultStatus.PENDING;
  }


  public isDone(): boolean {
    return this.innerState.status === WsResultStatus.DONE;
  }


  public setPending(): void {
    this.innerState.status = WsResultStatus.PENDING;
  }


  public setDone(): void {
    this.innerState.status = WsResultStatus.DONE;
  }


  public addSuccess(message: string): void {
    this.innerState.successMessages.push(message);
  }


  public addWarning(message: string): void {
    this.innerState.warningMessages.push(message);
  }


  public addError(message: string): void {
    this.innerState.errorMessages.push(message);
  }


  public addResponse(data: any): void {
    this.innerState.response = data;
  }


  public getResponse(): any {
    return this.innerState.response;
  }

  public getSuccessMessages(): string[] {
    return this.innerState.successMessages;
  }


  public getWarningMessages(): string[] {
    return this.innerState.warningMessages;
  }


  public getErrorMessages(): string[] {
    return this.innerState.errorMessages;
  }

}

export default WsResult;