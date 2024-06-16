import type { LogLevel } from "../../../models/spt/logging/LogLevel.ts";
export interface IClientLogRequest {
    Source: string;
    Level: LogLevel | string;
    Message: string;
    Color?: string;
    BackgroundColor?: string;
}
