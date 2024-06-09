import { HandbookController } from "../controllers/HandbookController.d.ts";
import { OnLoad } from "../di/OnLoad.d.ts";
export declare class HandbookCallbacks implements OnLoad {
    protected handbookController: HandbookController;
    constructor(handbookController: HandbookController);
    onLoad(): Promise<void>;
    getRoute(): string;
}
