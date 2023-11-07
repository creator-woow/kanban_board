enum HTTPMethod {
  Post = 'POST',
  Get = 'GET',
  Delete = 'DELETE',
  Update = 'UPDATE',
  Put = 'PUT'
}

interface IRequestConfig { 
  signal?: AbortSignal;
  method?: HTTPMethod;
  upload?: unknown;
}

export class HTTP {
  static post<TResponse = object>
  (
    url: string,
    upload: unknown
  ): Promise<TResponse> {
    return this._createRequest(url, {
      method: HTTPMethod.Post,
      upload
    });
  }

  static get<TResponse>(url: string, config?: IRequestConfig): Promise<TResponse> {
    return this._createRequest(url, config);
  }

  private static _createRequest<TResult>
  (
    url: string,
    config?: IRequestConfig
  ): Promise<TResult> {
    return (
      fetch(url, {
        method: config?.method,
        body: JSON.stringify(config?.upload),
        signal: config?.signal
      })
        .then((response) => response.json())
        .then((data: TResult) => data)
        .catch((error) => {
          throw error;
        })
    )
  }

}