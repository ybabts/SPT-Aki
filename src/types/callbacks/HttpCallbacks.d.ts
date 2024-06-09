import { OnLoad } from "../di/OnLoad.d.ts";
import { HttpServer } from "../servers/HttpServer.d.ts";
export declare class HttpCallbacks implements OnLoad {
    protected httpServer: HttpServer;
    constructor(httpServer: HttpServer);
    onLoad(): Promise<void>;
    getRoute(): string;
    getImage(): string;
}
