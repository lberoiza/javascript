export interface IUseFetchData<T> {
  isSuccessful: boolean,
  successMessages: string[],
  warningMessages: string[],
  errorMessages: string[],
  response: T | null
};


class UseFetchData<T> implements IUseFetchData<T> {
  isSuccessful: boolean = true;
  successMessages: string[] = [];
  warningMessages: string[] = [];
  errorMessages: string[] = [];
  response: T | null = null;

  public setFetchData(data: IUseFetchData<T>): UseFetchData<T> {
    this.isSuccessful = data.isSuccessful;
    this.successMessages = data.successMessages;
    this.warningMessages = data.warningMessages;
    this.errorMessages = data.errorMessages;
    this.response = data.response;
    return this;
  }

  public toJsonObject(): IUseFetchData<T> {
    const jsonObject: IUseFetchData<T> = {
      isSuccessful: this.isSuccessful,
      successMessages: this.successMessages,
      warningMessages: this.warningMessages,
      errorMessages: this.errorMessages,
      response: this.response
    };
    return structuredClone(jsonObject);
  }

  public hasResponse(): boolean {
    if (
      this.response === null ||
      (Array.isArray(this.response) && this.response.length === 0) ||
      (typeof this.response === 'object' && Object.keys(this.response).length === 0)
    ) {
      return false;
    }
    return true;
  }

  public hasErrors(): boolean {
    return this.errorMessages.length > 0;
  }
}

export default UseFetchData;