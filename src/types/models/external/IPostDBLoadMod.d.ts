import type { DependencyContainer } from "npm:tsyringe@4.2.0";
export interface IPostDBLoadMod {
    postDBLoad(container: DependencyContainer): void;
}
