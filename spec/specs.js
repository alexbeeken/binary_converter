describe('binary', function() {
  it("gives 0 when you input 0", function() {
    expect(binary(0)).to.equal("0");
  });

  it("give 1 when you input 1", function() {
    expect(binary(1)).to.equal("1");
  });

  it("gives 10 when you input 2", function() {
    expect(binary(2)).to.equal("10");
  });

  it("gives 11 when you input 3", function() {
    expect(binary(3)).to.equal("11");
  });

  it("gives 100 when you input 4", function() {
    expect(binary(4)).to.equal("100");
  });

  it("gives 10000000 when you input 128", function() {
    expect(binary(128)).to.equal("10000000");
  });

  it("gives 1100110011010011001110 when you input 3355854", function() {
    expect(binary(3355854)).to.equal("1100110011010011001110");
  });
});

describe('hex', function() {
  it("gives 0 when you input 0", function() {
    expect(hex(0)).to.equal("0");
  });

  it("gives a when you input 10", function() {
    expect(hex(10)).to.equal("a");
  });

  it("gives you 11 when you input 17", function() {
    expect(hex(17)).to.equal("11");
  })
});
