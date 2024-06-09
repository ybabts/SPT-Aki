import type { DependencyContainer } from "npm:tsyringe";
export interface IPostAkiLoadModAsync {
    postAkiLoadAsync(container: DependencyContainer): Promise<void>;
}
