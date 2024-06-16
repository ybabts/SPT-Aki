import type { DialogueCallbacks } from "../../callbacks/DialogueCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class DialogStaticRouter extends StaticRouter {
    protected dialogueCallbacks: DialogueCallbacks;
    constructor(dialogueCallbacks: DialogueCallbacks);
}
