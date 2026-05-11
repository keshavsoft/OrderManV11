import { funcToRun as funcToRunForLedgersHtmlId } from "./LedgersHtmlId/start.js";

import { funcToRun as funcToRunForStockItemsHtmlId } from "./StockItemsHtmlId/start.js";

import { funcToRun as funcToRunForImportHtmlId } from "./ImportHtmlId/start.js";
import { funcToRun as funcToRunForLedgerCreateHtmlId } from "./LedgerCreateHtmlId/start.js";

const hookAllListeners = () => {
    funcToRunForLedgersHtmlId();
    funcToRunForStockItemsHtmlId();

    funcToRunForImportHtmlId();
    funcToRunForLedgerCreateHtmlId();

};

export { hookAllListeners };