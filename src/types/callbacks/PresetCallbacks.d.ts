import { PresetController } from "../controllers/PresetController.d.ts";
import { OnLoad } from "../di/OnLoad.d.ts";
export declare class PresetCallbacks implements OnLoad {
    protected presetController: PresetController;
    constructor(presetController: PresetController);
    onLoad(): Promise<void>;
    getRoute(): string;
}
