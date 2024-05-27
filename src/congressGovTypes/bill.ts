import { API } from "./api";
import { Data } from "./data";

////////////////////////////////////////////////////////////////////////////////
//
// Data types related to Bills in congress.gov API
//
////////////////////////////////////////////////////////////////////////////////

/** Data types related to Bills in congress.gov API */
export namespace Bill {
  /** Basic Data for a bill */
  export type BasicBill = {
    /** The number of the Congress in which the bill was introduced. */
    congress: number;

    /** Information about hte latest action taken on the bill */
    latestAction: BasicAction;

    /** The number assigned to the bill. */
    number: string;

    /**
     * The chamber of Congress in which the bill originated, House or Senate.
     */
    originChamber: string;

    /** The chamber of Congress in which the bill originated, "H" or "S". */
    originChamberCode: string;

    /** The title of the bill. */
    title: string;

    /** The type of bill, such as "HR" for House of Representatives. */
    type: string;

    /** The date of the last update to the bill in YYYY-MM-DD format. */
    updateDate: string;

    /** The date and time of the last update to the bill, including text
     * updates, in ISO 8601 format.
     */
    updateDateIncludingText: string;

    /** URL to access detailed information about the bill in JSON format.
     * (Requires API key)
     */
    url: API.Link;
  };

  /** List of Bills (BasicData) */
  export type BasicBills = BasicBill[];

  /** Detailed information about a bill */
  export type DetailedBill = {
    /** Actions taken on the bill */
    actions: ActionsReference;

    /** Amendments to the bill */
    amendments: AmendmentsReference;

    /** Congressional Budget Office cost estimates for the bill. */
    cboCostEstimates: Data.CBOCostEstimate[];

    /** Committee reports related to the bill. */
    committeeReports: Data.CommitteeReportReference[];

    /** Committees involved with the bill. */
    committees: CommitteesReference;

    /** The Congress number in which the bill was introduced. */
    congress: number;

    /** HTML for the constitutional authority statement text of the bill. */
    constitutionalAuthorityStatementText: string;

    /** Information about cosponsors of the bill. */
    cosponsors: CosponsorData;

    /** Date the bill was introduced. */
    introducedDate: Data.Date;

    /** Last action taken on the bill. */
    latestAction: BasicAction;

    /** Laws stemming from this bill. */
    laws: LawReference[];

    /** Bill number. */
    number: string;

    /** Chamber of origin. */
    originChamber: "House" | "Senate";

    /** Primary policy area of the bill. */
    policyArea: PolicyArea;

    /** Related bills. */
    relatedBills: BillsReference;

    /** Sponsors of the bill. */
    sponsors: Sponsor[];

    /** Subjects related to the bill. */
    subjects: SubjectsReference;

    /** Summaries of the bill. */
    summaries: SummariesReference;

    /** Text versions of the bill. */
    textVersions: TextVersionsReference;

    /** Title of the bill. */
    title: string;

    /** Titles of the bill. */
    titles: TitlesReference;

    /** Type of bill. */
    type: string;

    /** Date of last update. */
    updateDate: Data.DateTime;

    /** Date of last update including text. */
    updateDateIncludingText: Data.DateTime;
  };

  /** Represents a sponsor of a bill */
  export type Sponsor = {
    /**
     * Unique identifier for sponsor.
     * (For Biographical Directory of the United States Congress)
     */
    bioguideId: string;

    /** Congressional district of sponsor, if applicable. */
    district: number;

    /** Sponsor's first name. */
    firstName: string;

    /** Sponsor's middle name. */
    middleName: string;

    /** Sponsor's last name. */
    lastName: string;

    /**
     * Sponsor's full name, including titles and district/state
     * representation.
     */
    fullName: string;

    /**
     * Indicates whether the sponsorship is by request.
     */
    isByRequest: "Y" | "N";

    /** The state which the sponsor represents. (Abbreviated) */
    state: string;

    /** URL to access more detailed information about the sponsor */
    url: API.Link;
  };

  /** Information about cosponsors. */
  export type CosponsorData = {
    /** Number of cosponsors. */
    count: number;

    /** Number of cosponsors who withdrew their sponsorship. */
    countIncludingWithdrawmCosponsors: number;

    /** URL to access detailed information about cosponsors. */
    url: API.Link;
  };

  /** Reference to a committee report related to the bill. */
  export type ComitteeReportReference = {
    /** Chamber & name of the report. */
    citation: string;

    /** Link to more information about the committee report. */
    url: API.Link;
  };

  /** Reference to committees related to a bill */
  export type CommitteesReference = {
    /** Number of committees */
    count: number;

    /** Link to more information about the committees. */
    url: API.Link;
  };

  /** Reference to actions taken on a bill. */
  export type ActionsReference = {
    /** Number of actions on given bill. */
    count: number;

    /** Link to more information about the actions. */
    url: string;
  };

  /** Reference to amendments to a bill. */
  export type AmendmentsReference = {
    /** Number of amendments to given bill. */
    count: number;

    /** Link to more information about the amendments. */
    url: string;
  };

  /** Reference to laws from bill. */
  export type LawReference = {
    /** Law number */
    number: string;

    /** Type of law */
    type: string;
  };

  /** Basic information on an action on a bill. */
  export type BasicAction = {
    /** Date of action */
    actionDate: Data.Date;

    /** Name/number of action. */
    text: string;
  };

  /** Reference to other bills. */
  export type BillsReference = {
    /** Number of bills. */
    count: number;

    /** Link to more information on bills. */
    url: API.Link;
  };

  /** Reference to subjects. */
  export type SubjectsReference = {
    /** Number of subjects. */
    count: number;

    /** Link to more information on subjects. */
    url: API.Link;
  };

  /** Reference to summaries. */
  export type SummariesReference = {
    /** Number of summaries. */
    count: number;

    /** Link to more information on summaries. */
    url: API.Link;
  };

  /** Reference to text versions of a bill. */
  export type TextVersionsReference = {
    /** Number of text versions. */
    count: number;

    /** Link to more information on text versions. */
    url: API.Link;
  };

  /** Reference to titles. */
  export type TitlesReference = {
    /** Number of titles. */
    count: number;

    /** Link to more information on titles. */
    url: API.Link;
  };

  /** Details of an action on a bill */
  export type DetailedAction = {
    /** Code for the action */
    actionCode: string;

    /** Date of action */
    actionDate: Data.Date;

    /** Information about the system from which this data originates */
    sourceSystem: {
      /** Numeric code representing the source system */
      code: number;

      /** Name of the source system */
      name: string;
    };

    /** Description of the bill's status or action taken */
    text: string;

    /** Type of action performed on the bill */
    type: string;
  };

  /** List of detailed actions */
  export type DetailedActions = DetailedAction[];

  /** Details of an amendment to a bill */
  export type DetailedAmendment = {
    /** The Congress number in which the amendment was proposed */
    congress: number;

    /** Detailed description of the amendment */
    description: string;

    /** Information about the latest action taken on the amendment */
    latestAction: {
      /** The date of the latest action on the amendment */
      actionDate: Data.Date;

      /** The time of the latest action on the amendment */
      actionTime: Data.Time;

      /** Description of the latest action taken on the amendment */
      text: string;
    };

    /** The number assigned to the amendment */
    number: string;

    /** The type of the amendment */
    type: string;

    /** The date and time when the amendment information was last updated */
    updateDate: string;

    /** URL to access the amendment's data in JSON format */
    url: string;
  };

  /** List of detailed amendments */
  export type DetailedAmendments = DetailedAmendment[];

  /** Committee on a bill. */
  export type Committee = {
    /** Array of activities associated with the committee */
    activities: CommitteeActivity[];

    /** The chamber of Congress to which the committee belongs */
    chamber: string;

    /** Name of the committee */
    name: string;

    /** System code uniquely identifying the committee */
    systemCode: string;

    /** Type of the committee */
    type: string;

    /** URL to access committee's data in JSON format */
    url: string;
  };

  /** Committee activity */
  export type CommitteeActivity = {
    /** Date of the committee activity */
    date: string;

    /** Name of the committee activity */
    name: string;
  };

  /** Cosponsor of a bill. */
  export type Cosponsor = {
    /** Biographical unique identifier of the cosponsor */
    bioguideId: string;

    /** Congressional district represented by the cosponsor */
    district: number;

    /** First name of the cosponsor */
    firstName: string;

    /** Full name and title of the cosponsor */
    fullName: string;

    /** Indicates whether the cosponsor is an original cosponsor of the bill */
    isOriginalCosponsor: boolean;

    /** Last name of the cosponsor */
    lastName: string;

    /** Political party of the cosponsor (e.g., 'R' for Republican, 'D' for Democrat) */
    party: string;

    /** Date when the cosponsorship started */
    sponsorshipDate: string;

    /** State represented by the cosponsor */
    state: string;

    /** URL to access cosponsor's data in JSON format */
    url: string;
  };

  /** Details of a relationship between bills */
  export type RelationshipDetail = {
    /** Method or system used to identify the relationship */
    identifiedBy: string;

    /** Type of relationship (e.g., 'Related bill') */
    type: string;
  };

  /** Information on a bill related to another bill. */
  export type RelatedBill = {
    /** Congress session in which the bill was introduced */
    congress: number;

    /** Information about the latest action taken on the bill */
    latestAction: BasicAction;

    /** Bill number */
    number: number;

    /** Array of relationship details to other bills */
    relationshipDetails: RelationshipDetail[];

    /** Title of the bill */
    title: string;

    /** Type of the bill (e.g., 'S' for Senate, 'HR' for House of Representatives) */
    type: string;

    /** URL to access the bill's data in JSON format */
    url: string;
  };

  /** Subject of legislation */
  export type LegislativeSubject = {
    /** Name of the subject */
    name: string;
  };

  /** Area of a policy */
  export type PolicyArea = {
    /** Name of the policy area */
    name: string;
  };

  /** Subjects of a bill */
  export type Subjects = {
    /** Legislative subjects */
    legislativeSubjects: LegislativeSubject[];

    /** Policy area */
    policyArea: PolicyArea;
  };

  /** Detailed summary of a bill */
  export type DetailedSummary = {
    /** Date of the action related to the summary */
    actionDate: Data.Date;

    /** Description of the action taken */
    actionDesc: string;

    /** Detailed text of the summary, including HTML tags */
    text: string;

    /** Date when the summary information was last updated */
    updateDate: Data.DateTime;

    /** Code representing the version of the summary */
    versionCode: string;
  };

  /** Reference to a bill in a specific format */
  export type TextFormatReference = {
    /** Format type */
    type: string;

    /** URL to access the bill in the specified format */
    url: string;
  };

  /** Text version of a bill. */
  export type TextVersion = {
    /** Date of text */
    date: null | Data.DateTime;

    /** Text version formats */
    formats: TextFormatReference[];

    /** Type of text version */
    type: string;
  };

  /** Title of a bil. */
  export type Title = {
    /** Title name of the bill. */
    title: string;

    /** Type of title */
    titleType: string;

    /** Version code */
    billTextVersionCode?: string;

    /** Version name */
    billTextVersionName?: string;

    /** Chamber code */
    chamberCode?: string;

    /** Chamber name */
    chamberName?: string;
  };
}
