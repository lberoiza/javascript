import { IUseFetchData } from "@/classes/UseFetchData";


export type FetchRequestReturn<T> = {
  promise: Promise<IUseFetchData<T>>,
  abortController: AbortController
}

class FetchRequest {

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


  public post<T>(
    urlPath: string,
    params = {},
    options: RequestInit = this.postOptions(params)
  ): FetchRequestReturn<T> {
    return this.fetch<T>(urlPath, options);
  }


  public delete<T>(
    urlPath: string,
    params = {},
    options: RequestInit = this.postOptions(params)
  ): FetchRequestReturn<T> {
    options.method = 'DELETE';
    return this.fetch<T>(urlPath, options);
  }

  public put<T>(
    urlPath: string,
    params = {},
    options: RequestInit = this.postOptions(params)
  ): FetchRequestReturn<T> {
    options.method = 'PUT';
    return this.fetch<T>(urlPath, options);
  }


  public getOptions(): RequestInit {
    return {
      method: 'GET',
      headers: this.getRequestHeader()
    };
  }


  public get<T>(
    urlPath: string,
    params: Record<string, string> = {},
    options: RequestInit = this.postOptions(params)
  ): FetchRequestReturn<T> {
    options.method = 'GET';
    const url = `${urlPath}${this.objectToQueryString(params)}`;
    delete(options.body);
    return this.fetch<T>(url, options);
  }


  public formPostOptions(): RequestInit {
    return {
      method: 'POST'
    };
  }


  public postForm<T>(
    urlPath: string,
    formData = new FormData(),
    options: RequestInit = this.formPostOptions()
  ): FetchRequestReturn<T> {
    options.body = formData;
    return this.fetch<T>(urlPath, options);
  }


  public fetch<T>(urlPath: string, options: RequestInit): FetchRequestReturn<T> {
    const controller = new AbortController();
    options.signal = controller.signal;
    return {
      promise: fetch(urlPath, options).then(response => response.json()),
      abortController: controller
    };
  }

}

export default new FetchRequest()