import type { DependencyContainer } from "npm:tsyringe@4.2.0";
export interface IPostAkiLoadModAsync {
    postAkiLoadAsync(container: DependencyContainer): Promise<void>;
}
