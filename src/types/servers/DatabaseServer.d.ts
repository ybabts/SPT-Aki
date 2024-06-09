import { IDatabaseTables } from "../models/spt/server/IDatabaseTables.d.ts";
export declare class DatabaseServer {
    protected tableData: IDatabaseTables;
    getTables(): IDatabaseTables;
    setTables(tableData: IDatabaseTables): void;
}
