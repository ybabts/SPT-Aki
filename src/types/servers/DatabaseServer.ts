import type { IDatabaseTables } from "../models/spt/server/IDatabaseTables.ts";
export declare class DatabaseServer {
    protected tableData: IDatabaseTables;
    getTables(): IDatabaseTables;
    setTables(tableData: IDatabaseTables): void;
}
