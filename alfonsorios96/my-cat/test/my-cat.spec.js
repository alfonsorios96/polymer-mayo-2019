/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../my-cat.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<my-cat></my-cat>");
    assert.strictEqual(_element.hello, 'Hello World!');
    _element.dataChart = [];
    await _element.updated;
    assert...
  });
});
