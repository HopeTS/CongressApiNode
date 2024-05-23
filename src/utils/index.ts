import * as con from "constants";

/** Add api key to request*/
export const addApiKey = (url: string, apiKey: string) => {
  return `${url}?api_key=${apiKey}`;
};

/** Create query string out of json object */
export const createQueryString = (params: Record<string, any>): string => {
  return Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

/** Add a synchronous delay */
export const delay = (ms?: number) =>
  new Promise((res) => setTimeout(res, ms || 200));
