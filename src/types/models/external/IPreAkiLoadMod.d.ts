import type { DependencyContainer } from "npm:tsyringe";
export interface IPreAkiLoadMod {
    preAkiLoad(container: DependencyContainer): void;
}
