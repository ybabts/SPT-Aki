import type { DependencyContainer } from "npm:tsyringe";
export interface IPostDBLoadModAsync {
    postDBLoadAsync(container: DependencyContainer): Promise<void>;
}
