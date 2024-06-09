import { OnUpdate } from "../../../di/OnUpdate.d.ts";
export declare class OnUpdateMod implements OnUpdate {
    private onUpdateOverride;
    private getRouteOverride;
    constructor(onUpdateOverride: (timeSinceLastRun: number) => boolean, getRouteOverride: () => string);
    onUpdate(timeSinceLastRun: number): Promise<boolean>;
    getRoute(): string;
}
