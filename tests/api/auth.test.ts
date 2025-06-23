import { IncomingHttpHeaders } from "http";
import { describe, expect, it } from "vitest";
import { getAPIKey } from "../../src/api/auth";

describe("getAPIKey", () => {
  it("should return null if the Authorization header is not present", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return null if the Authorization header is not in the correct format", () => {
    const headers: IncomingHttpHeaders = { authorization: "123" };
    expect(getAPIKey(headers)).toBeNull();

    const headers2: IncomingHttpHeaders = { authorization: "ApiKeyy 123" };
    expect(getAPIKey(headers2)).toBeNull();
  });

  it("should return the API key from the Authorization header", () => {
    const headers: IncomingHttpHeaders = { authorization: "ApiKey 123" };
    expect(getAPIKey(headers)).toBe("123");
  });
});
