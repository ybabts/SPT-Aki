import type { DependencyContainer } from "npm:tsyringe@4.8.0";
export interface IPreAkiLoadMod {
    preAkiLoad(container: DependencyContainer): void;
}
