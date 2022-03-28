import { config } from "../config";

describe("# Movies - config", () => {
  test("## config must have dynamodb table name and cache max age", () => {
    expect(config).toHaveProperty("TABLE_MOVIES");
    expect(config).toHaveProperty("CACHE_MAX_AGE", 604800);
  });
});
