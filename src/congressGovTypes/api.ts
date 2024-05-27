import { Data } from "./data";
import { Bill } from "./bill";

////////////////////////////////////////////////////////////////////////////////
//
// congress.gov API data types
//
////////////////////////////////////////////////////////////////////////////////

/** Types related to the API endpoint responses directly */
export namespace API {
  /** Link to an API endpoint (requires added API key in query string) */
  export type Link = string;

  /** Pagination field in response from congress.gov API */
  export type Pagination = {
    count: number;
    next: string;
  };

  /** Request field in response from congress.gov API */
  export type Request = {
    contentType: string;
    format: string;
  };

  /**
   * Endpoint response for:
   * /bill
   * /bill/{congress}
   * /bill/{congress}/{billType}
   */
  export type BillsResponse = {
    bills: Bill.BasicBills;
    pagination: Pagination;
    request: Request;
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}
   */
  export type BillResponse = {
    bill: Bill.DetailedBill;
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/actions
   */
  export type BillActionsResponse = {
    actions: Bill.DetailedActions;
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/amendments
   */
  export type BillAmendmentsResponse = {
    /** List of amendments */
    amendments: Bill.DetailedAmendments;
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/committees
   */
  export type BillCommitteesResponse = {
    /** List of committees */
    committees: Bill.Committee[];
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/cosponsors
   */
  export type BillCosponsorsResponse = {
    /** List of cosponsors */
    cosponsors: Bill.Cosponsor[];
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/relatedBills
   */
  export type BillRelatedBillsResponse = {
    /** List of related bills */
    relatedBills: Bill.RelatedBill[];
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/subjects
   */
  export type BillSubjectsResponse = {
    /** Subjects of the bill. */
    subjects: Bill.Subjects;
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/summaries
   */
  export type BillSummariesResponse = {
    /** List of summaries. */
    summaries: Bill.DetailedSummary[];
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/text
   */
  export type BillTextResponse = {
    /** List of text versions for a specified bill. */
    textVersions: Bill.TextVersion[];
  } & Response;

  /**
   * Endpoint response for:
   * /bill/{congress}/{billType}/{billNumber}/titles
   */
  export type BillTitlesResponse = {
    /** List of titles. */
    titles: Bill.Title[];
  } & Response;

  /**
   * Endpoint response for:
   * /amendment
   */
  export type AmendmentsResponse = {
    amendments: Bill.DetailedAmendments;
  } & Response;
}
