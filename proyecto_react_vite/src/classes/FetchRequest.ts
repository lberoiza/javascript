export type FetchRequestResponse = {
  isSuccessful: boolean,
  successMessages: string[],
  warningMessages: string[],
  errorMessages: string[],
  response: any
}


class FetchRequest {
  public getRailsCsrfToken(): string {
    const csrfToken = document.querySelector("[name='csrf-token']");
    // return csrfToken ? csrfToken.content : '';
    return '';
  }

  public getRequestHeader(): Record<string, string> {
    return {
      // 'X-CSRF-Token': this.getRailsCsrfToken(),
      'Content-Type': 'application/json'
    };
  }

  public objectToQueryString(requestParams: Record<string, string>): string {
    const keys = Object.keys(requestParams);
    if (keys.length === 0) {
      return '';
    }
    return (
      '?' +
      keys
        .map(key => {
          let value = requestParams[key];
          if (typeof value === 'object' && !Array.isArray(value)) {
            value = JSON.stringify(value);
          } else {
            value = encodeURIComponent(value as string);
          }
          return `${encodeURIComponent(key)}=${value}`;
        })
        .join('&')
    );
  }

  public postOptions(params: Record<string, string> = {}): RequestInit {
    return {
      method: 'POST',
      headers: this.getRequestHeader(),
      body: JSON.stringify(params)
    };
  }

  public post(
    urlPath: string,
    params: Record<string, string> = {},
  ): Promise<FetchRequestResponse> {
    const options = this.postOptions(params);
    return fetch(urlPath, options).then(response => response.json());
  }

  public getOptions(): RequestInit {
    return {
      method: 'GET',
      headers: this.getRequestHeader()
    };
  }

  public get(
    urlPath: string,
    params: Record<string, string> = {},
  ): Promise<FetchRequestResponse> {
    const options = this.getOptions();
    const url = `${urlPath}${this.objectToQueryString(params)}`;
    return fetch(url, options).then(response => response.json());
  }

  public formPostOptions(formData: FormData): RequestInit {
    return {
      method: 'POST',
      headers: this.getRequestHeader(),
      body: formData
    };
  }

  public postForm(
    urlPath: string,
    formData = new FormData(),
  ): Promise<FetchRequestResponse> {
    const options = this.formPostOptions(formData);
    return fetch(urlPath, options).then(response => response.json());
  }


}

export default new FetchRequest()