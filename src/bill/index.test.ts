import * as bill from "./index";
import { delay } from "../utils";

const API_KEY = require("dotenv").config().parsed.API_KEY;

afterEach(() => {
  delay();
});

describe("Bill functions (all /bill endpoints)", () => {
  test("get (/bill endpoint)", async () => {
    const result = await bill.get({
      APIKey: API_KEY,
      params: {
        offset: -1,
      },
    });
    expect(result.bills).toBeDefined();
  });

  test("getByCongress (/bill/{congress} endpoint)", async () => {
    const result = await bill.getByCongress({ congress: 117, APIKey: API_KEY });
    expect(result.bills).toBeDefined();
  });

  test("getByBillType (/bill/{congress}/{billType} endpoint)", async () => {
    const result = await bill.getByBillType({
      congress: 117,
      billType: "hr",
      APIKey: API_KEY,
    });
    expect(result.bills).toBeDefined();
  });

  test("getByBillNumber (/bill/{congress}/{billType}/{billNumber} endpoint)", async () => {
    const result = await bill.getByBillNumber({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.bill).toBeDefined();
  });

  test("getActions (/bill/{congress}/{billType}/{billNumber}/actions endpoint)", async () => {
    const result = await bill.getActions({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.actions).toBeDefined();
  });

  test("getAmendments (/bill/{congress}/{billType}/{billNumber}/amendments endpoint)", async () => {
    const result = await bill.getAmendments({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.amendments).toBeDefined();
  });

  test("getCommittees (/bill/{congress}/{billType}/{billNumber}/committees endpoint)", async () => {
    const result = await bill.getCommittees({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.committees).toBeDefined();
  });

  test("getCosponsors (/bill/{congress}/{billType}/{billNumber}/cosponsors endpoint)", async () => {
    const result = await bill.getCosponsors({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.cosponsors).toBeDefined();
  });

  test("getRelatedBills (/bill/{congress}/{billType}/{billNumber}/relatedbills endpoint)", async () => {
    const result = await bill.getRelatedBills({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.relatedBills).toBeDefined();
  });

  test("getSubjects (/bill/{congress}/{billType}/{billNumber}/subjects endpoint)", async () => {
    const result = await bill.getSubjects({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.subjects).toBeDefined();
  });

  test("getSummaries (/bill/{congress}/{billType}/{billNumber}/summaries endpoint)", async () => {
    const result = await bill.getSummaries({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.summaries).toBeDefined();
  });

  test("getText (/bill/{congress}/{billType}/{billNumber}/text endpoint)", async () => {
    const result = await bill.getText({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.textVersions).toBeDefined();
  });

  test("getTitles (/bill/{congress}/{billType}/{billNumber}/titles endpoint)", async () => {
    const result = await bill.getTitles({
      congress: 117,
      billType: "hr",
      billNumber: 1,
      APIKey: API_KEY,
    });

    expect(result.titles).toBeDefined();
  });
});
