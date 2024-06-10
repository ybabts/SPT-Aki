import type { DependencyContainer } from "npm:tsyringe@4.2.0";
export interface IPreAkiLoadMod {
    preAkiLoad(container: DependencyContainer): void;
}
