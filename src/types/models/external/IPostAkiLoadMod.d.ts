import type { DependencyContainer } from "npm:tsyringe";
export interface IPostAkiLoadMod {
    postAkiLoad(container: DependencyContainer): void;
}
