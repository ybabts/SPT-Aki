import { DialogueCallbacks } from "../../callbacks/DialogueCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class DialogStaticRouter extends StaticRouter {
    protected dialogueCallbacks: DialogueCallbacks;
    constructor(dialogueCallbacks: DialogueCallbacks);
}
