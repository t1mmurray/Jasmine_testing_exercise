describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
    tipAmtInput.value = 5;
    billAmtInput.value = 20;
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should update the servertable class on updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();

    let currentTdList = document.querySelectorAll("#serverTable tbody tr td");

    expect(currentTdList[0].innerText).toEqual("Alice");
    expect(currentTdList[1].innerText).toEqual("$0.00");
    expect(currentTdList.length).toEqual(2);
  });

  it("should update the serverTbody with Tr element and reset", function () {
    expect(serverTbody.innerHTML).toEqual("");
  });

  afterEach(function () {
    // cleanup logic
    serverNameInput.value = "";
    serverTbody.innerHTML = "";
    allServers = {};
    serverId = 0;
    paymentTbody.innerHTML = "";
    summaryTds.innerHTML = "";
  });
});
