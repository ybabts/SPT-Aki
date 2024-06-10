import { DependencyContainer } from "npm:tsyringe@4.2.0";
export declare class OnUpdateModService {
    protected container: DependencyContainer;
    constructor(container: DependencyContainer);
    registerOnUpdate(name: string, onUpdate: (timeSinceLastRun: number) => boolean, getRoute: () => string): void;
}
