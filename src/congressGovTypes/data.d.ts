import * as API from "./api";

////////////////////////////////////////////////////////////////////////////////
//
// congress.gov Data Types
//
////////////////////////////////////////////////////////////////////////////////

/** Data types of interest from the congress.gov API */
export namespace Data {
  /** Represents a date (YYYY-MM-DD) */
  export type Date = string;

  /** Represents a military time (HH:MM:SS) */
  export type Time = string;

  /** Represents a date and time (ISO 8601) */
  export type DateTime = string;

  /** Specific bill details */
  export type BillDetails = {
    // TODO
  };

  /** Congressional Budget Office cost estimate for a bill */
  export type CBOCostEstimate = {
    description: string;
    pubDate: string;
  };

  /** Represents information about a member of Congress from congress.gov. */
  export type Member = {
    /** Biographical guide identifier. */
    bioguideId: string;

    /** Depiction information, including image URL and attribution. */
    depiction: {
      /** HTML string, or normal string, for attribution. */
      attribution: string;

      /** URL of the member's image. */
      imageUrl: string;
    };

    /** Congressional district, null if not applicable. */
    district: string | null;

    /** Full name of the member. */
    name: string;

    /** Political party name. */
    partyName: "Democratic" | "Republican" | "Independent";

    /** State represented by the member. */
    state: string;

    /** Terms served by the member. */
    terms: {
      /** Array of term objects. */
      item: Array<{
        /** Chamber of the Congress in which the term was served. */
        chamber: string;

        /** End year of the term, null if the term is ongoing. */
        endYear: number | null;

        /** Start year of the term. */
        startYear: number;
      }>;
    };

    /** Date of the last update of the information. */
    updateDate: string;

    /** URL to access more detailed information. */
    url: string;
  };

  /** TODO */
  export type CommitteeReportReference = any;
}
