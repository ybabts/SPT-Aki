import { DependencyContainer } from "npm:tsyringe";
export interface IModLoader {
    load(container: DependencyContainer): void;
    getModPath(mod: string): string;
}
