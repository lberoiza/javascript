export type WsResponse = {
  isSuccessful: boolean,
  successMessages: string[],
  warningMessages: string[],
  errorMessages: string[],
  response: any

}


class FetchRequest {
  public static getRailsCsrfToken(): string {
    const csrfToken = document.querySelector("[name='csrf-token']");
    // return csrfToken ? csrfToken.content : '';
    return '';
  }

  public static getRequestHeader(): Record<string, string> {
    return {
      // 'X-CSRF-Token': FetchRequest.getRailsCsrfToken(),
      'Content-Type': 'application/json'
    };
  }

  public static objectToQueryString(requestParams: Record<string, string>): string {
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

  public static postOptions(params: Record<string, string> = {}): RequestInit {
    return {
      method: 'POST',
      headers: FetchRequest.getRequestHeader(),
      body: JSON.stringify(params)
    };
  }

  public static post(
    urlPath: string,
    successCallBack: ((result: WsResponse) => void) | null = null,
    params: Record<string, string> = {},
    failHandler = '#message-error'
  ): void {
    const options = FetchRequest.postOptions(params);
    fetch(urlPath, options)
      .then(wsResponse => wsResponse.json())
      .then((result: WsResponse) => (successCallBack ? successCallBack(result) : result))
      .catch(error => {
        FetchRequest.doFailureHandler(error, failHandler);
      });
  }

  public static getOptions(): RequestInit {
    return {
      method: 'GET',
      headers: FetchRequest.getRequestHeader()
    };
  }

  public static get(
    urlPath: string,
    successCallBack: ((result: WsResponse) => void) | null = null,
    params: Record<string, string> = {},
    failHandler = '#message-error'
  ): void {
    const options = FetchRequest.getOptions();
    const url = `${urlPath}${FetchRequest.objectToQueryString(params)}`;
    fetch(url, options)
      .then(wsResponse => wsResponse.json())
      .then((result: WsResponse) => (successCallBack ? successCallBack(result) : result))
      .catch(error => {
        FetchRequest.doFailureHandler(error, failHandler);
      });
  }

  public static formPostOptions(formData: FormData): RequestInit {
    return {
      method: 'POST',
      headers: FetchRequest.getRequestHeader(),
      body: formData
    };
  }

  public static postForm(
    urlPath: string,
    successCallBack: ((result: WsResponse) => void) | null = null,
    formData = new FormData(),
    failHandler = '#message-error'
  ): void {
    const options = FetchRequest.formPostOptions(formData);
    fetch(urlPath, options)
      .then(wsResponse => wsResponse.json())
      .then((result: WsResponse) => (successCallBack ? successCallBack(result) : result))
      .catch(error => {
        FetchRequest.doFailureHandler(error, failHandler);
      });
  }


  private static doFailureHandler = (error: any, failHandler: string | Function): void => {
    console.error(error);
  
    // if (failHandler instanceof Function) {
    //   failHandler();
    // } else {
    //   if (document.querySelector(failHandler)) {
    //     // FlashMessageHelper es una clase de ejemplo, deberías definirla en tu código.
    //     FlashMessageHelper.show_error(FlashMessageHelper.SUPPORT_MESSAGE, false, failHandler);
    //   } else {
    //     alert(FlashMessageHelper.SUPPORT_MESSAGE);
    //   }
    // }
  };

}

export default FetchRequest