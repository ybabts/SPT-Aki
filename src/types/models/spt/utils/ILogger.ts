import type { Daum } from "../../../models/eft/itemEvent/IItemEventRouterRequest.ts";
import type { LogBackgroundColor } from "../../../models/spt/logging/LogBackgroundColor.ts";
import type { LogTextColor } from "../../../models/spt/logging/LogTextColor.ts";
export interface ILogger {
    writeToLogFile(data: string | Daum): void;
    log(data: string | Record<string, unknown> | Error, color: string, backgroundColor?: string): void;
    logWithColor(data: string | Record<string, unknown>, textColor: LogTextColor, backgroundColor?: LogBackgroundColor): void;
    error(data: string): void;
    warning(data: string): void;
    success(data: string): void;
    info(data: string): void;
    debug(data: string | Record<string, unknown>, onlyShowInConsole?: boolean): void;
}
