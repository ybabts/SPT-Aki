import type { DependencyContainer } from "npm:tsyringe";
export interface IPostDBLoadMod {
    postDBLoad(container: DependencyContainer): void;
}
