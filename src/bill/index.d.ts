import * as Types from "congressGovTypes";

export type Args = {
  /** congress.gov API key */
  APIKey: string;
};

export type GetParams = {
  /** The data format. Value can be xml or json. */
  format?: string;

  /** The starting record returned. 0 is the first record. */
  offset?: number;

  /** The number of records returned. The maximum limit is 250. */
  limit?: number;

  /** The starting timestamp to filter by update data. */
  fromDateTime?: Types.Data.DateTime;

  /** The ending timestamp to filter by update data. */
  toDateTime?: Types.Data.DateTime;

  /** Sort by update date in Congress.gov. */
  sort?: "updateDate+asc" | "updateDate+desc";
};

export type GetArgs = {
  params?: GetParams;
} & Args;

export type GetByCongressArgs = {
  /** The congress number to retrieve */
  congress: number;
} & GetArgs;

export type GetByBillTypeArgs = {
  /** The bill type to retrieve */
  billType: any; // TODO
} & GetByCongressArgs;

export type GetByBillNumberArgs = {
  /** The bill number to retrieve */
  billNumber: number;
} & GetByBillTypeArgs;

export type GetActionsArgs = {
  /** The congress number. For example, the value can be 117. */
  congress: number;

  /** The type of bill. */
  billType:
    | "hr"
    | "s"
    | "hjres"
    | "sjres"
    | "hconres"
    | "sconres"
    | "hres"
    | "sres";

  /** The bill's assigned number. For example, the value can be 3076. */
  billNumber: number;

  /** The data format. */
  format?: "xml" | "json";

  /** The starting record returned. 0 is the first record. */
  offset?: number;

  /** The number of records returned. The maximum limit is 250. */
  limit?: number;
};

export type getAmendmentsArgs = {} & GetActionsArgs;

export type getCommitteesArgs = {} & GetActionsArgs;

export type getCosponsorsArgs = {} & GetActionsArgs;

export type getRelatedBillsArgs = {} & GetActionsArgs;

export type getSubjectsArgs = {} & GetActionsArgs;

export type getSummariesArgs = {} & GetActionsArgs;

export type getTextArgs = {} & GetActionsArgs;

export type getTitlesArgs = {} & GetActionsArgs;
