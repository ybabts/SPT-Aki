import type { HandbookHelper } from "../helpers/HandbookHelper.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
export declare class HandbookController {
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    constructor(databaseServer: DatabaseServer, handbookHelper: HandbookHelper);
    load(): void;
}
