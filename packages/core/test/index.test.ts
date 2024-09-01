import { describe, expect, it } from "vitest";
import * as core from "../src";

describe("core/index", () => {
  it("Should export one", () => {
    expect(core.one).toBeDefined();
  });
  it("Exported `one` should be 1", () => {
    expect(core.one).toBe(1);
  });
});
