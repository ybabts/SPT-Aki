import type { HttpServerHelper } from "../helpers/HttpServerHelper.ts";
import type { NotifierHelper } from "../helpers/NotifierHelper.ts";
import type { INotifierChannel } from "../models/eft/notifier/INotifier.ts";
import type { NotificationService } from "../services/NotificationService.ts";
export declare class NotifierController {
    protected notifierHelper: NotifierHelper;
    protected httpServerHelper: HttpServerHelper;
    protected notificationService: NotificationService;
    protected pollInterval: number;
    protected timeout: number;
    constructor(notifierHelper: NotifierHelper, httpServerHelper: HttpServerHelper, notificationService: NotificationService);
    /**
     * Resolve an array of session notifications.
     *
     * If no notifications are currently queued then intermittently check for new notifications until either
     * one or more appear or when a timeout expires.
     * If no notifications are available after the timeout, use a default message.
     */
    notifyAsync(sessionID: string): Promise<unknown>;
    getServer(sessionID: string): string;
    /** Handle client/notifier/channel/create */
    getChannel(sessionID: string): INotifierChannel;
}
