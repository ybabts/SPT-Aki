import type { DependencyContainer } from "npm:tsyringe@4.8.0";
export interface IPostAkiLoadMod {
    postAkiLoad(container: DependencyContainer): void;
}
