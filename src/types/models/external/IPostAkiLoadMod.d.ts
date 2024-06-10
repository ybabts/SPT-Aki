import type { DependencyContainer } from "npm:tsyringe@4.2.0";
export interface IPostAkiLoadMod {
    postAkiLoad(container: DependencyContainer): void;
}
