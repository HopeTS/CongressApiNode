import * as Types from "./types";
import * as CTypes from "@/congressGovTypes";
import * as utils from "@/utils";
import * as con from "@/con";

/**
 * Returns a list of bills sorted by date of latest action.
 *
 * **GET /bill**
 */
export const get = async (
  args: Types.GetArgs
): Promise<CTypes.API.BillsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns a list of bills filtered by the specified congress, sorted by
 * date of latest action.
 *
 * **GET /bill/{congress}**
 */
export const getByCongress = async (
  args: Types.GetByCongressArgs
): Promise<CTypes.API.BillsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns a list of bills filtered by the specified congress and bill type,
 * sorted by date of latest action.
 *
 * **GET /bill/{congress}/{billType}**
 */
export const getByBillType = async (
  args: Types.GetByBillTypeArgs
): Promise<CTypes.API.BillsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns detailed information for a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}**
 */
export const getByBillNumber = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
        api_key: args.APIKey,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of actions on a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/actions**
 */
export const getActions = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillActionsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/actions/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of amendments on a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/amendments**
 */
export const getAmendments = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillAmendmentsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/amendments/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of committees associated with a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/committees**
 */
export const getCommittees = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillCommitteesResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/committees/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of cosponsors on a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/cosponsors**
 */
export const getCosponsors = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillCosponsorsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/cosponsors/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of related bills to a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/relatedbills**
 */
export const getRelatedBills = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillRelatedBillsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/relatedbills/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of legislative subjects on a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/subjects**
 */
export const getSubjects = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillSubjectsResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/subjects/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of summaries for a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/summaries**
 */
export const getSummaries = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillSummariesResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/summaries/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of text versions for a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/text**
 */
export const getText = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillTextResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/text/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};

/**
 * Returns the list of titles for a specified bill.
 *
 * **GET /bill/{congress}/{billType}/{billNumber}/titles**
 */
export const getTitles = async (
  args: Types.GetByBillNumberArgs
): Promise<CTypes.API.BillTitlesResponse> => {
  // Construct url
  const params = args.params
    ? utils.createQueryString({
        ...args.params,
      })
    : "";
  const url = `${con.API}bill/${args.congress}/${args.billType}/${args.billNumber}/titles/${params}`;

  // Request
  const result = await fetch(url, {
    headers: {
      "x-api-key": args.APIKey,
    },
  });

  // Result
  if (!result.ok) throw new Error(result.statusText);
  return await result.json();
};
