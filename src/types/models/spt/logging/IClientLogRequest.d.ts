import { LogLevel } from "../../../models/spt/logging/LogLevel.d.ts";
export interface IClientLogRequest {
    Source: string;
    Level: LogLevel | string;
    Message: string;
    Color?: string;
    BackgroundColor?: string;
}
