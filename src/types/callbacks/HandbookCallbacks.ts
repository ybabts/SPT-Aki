import type { HandbookController } from "../controllers/HandbookController.ts";
import type { OnLoad } from "../di/OnLoad.ts";
export declare class HandbookCallbacks implements OnLoad {
    protected handbookController: HandbookController;
    constructor(handbookController: HandbookController);
    onLoad(): Promise<void>;
    getRoute(): string;
}
