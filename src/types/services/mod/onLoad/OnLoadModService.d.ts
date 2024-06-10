import { DependencyContainer } from "npm:tsyringe@4.2.0";
export declare class OnLoadModService {
    protected container: DependencyContainer;
    constructor(container: DependencyContainer);
    registerOnLoad(name: string, onLoad: () => void, getRoute: () => string): void;
}
