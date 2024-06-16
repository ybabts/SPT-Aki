import type { OnLoad } from "../di/OnLoad.ts";
import type { HttpServer } from "../servers/HttpServer.ts";
export declare class HttpCallbacks implements OnLoad {
    protected httpServer: HttpServer;
    constructor(httpServer: HttpServer);
    onLoad(): Promise<void>;
    getRoute(): string;
    getImage(): string;
}
