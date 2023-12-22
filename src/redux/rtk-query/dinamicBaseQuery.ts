import { GQLArguments } from '../../types/types';

const dynamicBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({
    url,
    body,
    headers,
  }: GQLArguments): Promise<
    | { data: Promise<string>; error?: undefined }
    | { error: { status: number; data: string }; data?: undefined }
  > => {
    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const summaryHeaders: Record<string, string> = Object.keys(headers).length
      ? Object.assign(defaultHeaders, headers)
      : defaultHeaders;

    try {
      const response: Response = await fetch(url ? url : baseUrl, {
        mode: 'cors',
        method: 'POST',
        headers: summaryHeaders,
        body: JSON.stringify(body),
      });

      const result = response.json();

      return { data: result };
    } catch (error) {
      return { error: { status: 500, data: error } };
    }
  };

export default dynamicBaseQuery;
