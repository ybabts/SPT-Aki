import { DependencyContainer } from "npm:tsyringe@4.2.0";
export interface IModLoader {
    load(container: DependencyContainer): void;
    getModPath(mod: string): string;
}
