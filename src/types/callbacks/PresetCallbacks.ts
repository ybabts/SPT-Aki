import type { PresetController } from "../controllers/PresetController.ts";
import type { OnLoad } from "../di/OnLoad.ts";
export declare class PresetCallbacks implements OnLoad {
    protected presetController: PresetController;
    constructor(presetController: PresetController);
    onLoad(): Promise<void>;
    getRoute(): string;
}
