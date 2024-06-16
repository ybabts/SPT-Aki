import type { DependencyContainer } from "npm:tsyringe@4.8.0";
export interface IPostAkiLoadModAsync {
    postAkiLoadAsync(container: DependencyContainer): Promise<void>;
}
