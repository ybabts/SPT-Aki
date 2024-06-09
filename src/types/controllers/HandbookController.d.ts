import { HandbookHelper } from "../helpers/HandbookHelper.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
export declare class HandbookController {
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    constructor(databaseServer: DatabaseServer, handbookHelper: HandbookHelper);
    load(): void;
}
