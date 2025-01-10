export const buildRequestParams = async (method: string, endpoint: string, data?: any, query?: any) => {
    const headers: any = {};
    const params: RequestParams = {
      method,
      endpoint,
      data,
      headers,
      query,
    };

    return params;
  }