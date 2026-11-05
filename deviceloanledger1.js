const equipmentLedger = {
  "1": {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025"
  },
  "2": {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: ""
  },
  "3": {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025"
  },
  "4": {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: ""
  }
};

const serializeLedger = (ledger) => JSON.stringify(ledger);

const loadLedger = (json) => JSON.parse(json);

const checkoutDevice = (ledger, assetTag, borrower) => {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Asset ${assetTag} was not found.`
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger,
      message: `Asset ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));

  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Asset ${assetTag} has been checked out to ${borrower.name}.`
  };
};

const checkinDevice = (ledger, assetTag) => {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Asset ${assetTag} was not found.`
    };
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Asset ${assetTag} has been checked in successfully.`
  };
};

const parseLedgerDate = (dateString) => {
  const [month, day, year] = dateString.split("/").map(Number);
  return year * 10000 + month * 100 + day;
};

const listOverdueDevices = (ledger, today) => {
  const todayValue = parseLedgerDate(today);

  return Object.values(ledger)
    .filter((device) =>
      device.status === "CheckedOut" &&
      device.dueDate !== "" &&
      parseLedgerDate(device.dueDate) < todayValue
    )
    .sort((a, b) =>
      parseLedgerDate(a.dueDate) - parseLedgerDate(b.dueDate)
    );
};