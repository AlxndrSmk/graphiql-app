import { GQLArguments } from '@/types/types';

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

    const summaryHeaders: Record<string, string> | undefined = !Object.keys(
      headers!
    ).length
      ? defaultHeaders
      : Object.assign(defaultHeaders, headers);

    try {
      const response: Response = await fetch(url ? url : baseUrl, {
        mode: 'cors',
        method: 'POST',
        headers: summaryHeaders,
        body: JSON.stringify(body),
      });

      const result = response.json();

      return { data: result };
    } catch (error: unknown) {
      return { error: { status: 500, data: <string>error } };
    }
  };

export default dynamicBaseQuery;
