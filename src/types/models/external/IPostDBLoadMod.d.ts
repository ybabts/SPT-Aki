import type { DependencyContainer } from "npm:tsyringe@4.8.0";
export interface IPostDBLoadMod {
    postDBLoad(container: DependencyContainer): void;
}
