import type { IncomingMessage, ServerResponse } from "node:http";
import type { DependencyContainer } from "npm:tsyringe@4.8.0";
export declare class HttpListenerModService {
    protected container: DependencyContainer;
    constructor(container: DependencyContainer);
    registerHttpListener(name: string, canHandleOverride: (sessionId: string, req: IncomingMessage) => boolean, handleOverride: (sessionId: string, req: IncomingMessage, resp: ServerResponse) => void): void;
}
