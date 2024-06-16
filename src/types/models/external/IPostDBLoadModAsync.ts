import type { DependencyContainer } from "npm:tsyringe@4.8.0";
export interface IPostDBLoadModAsync {
    postDBLoadAsync(container: DependencyContainer): Promise<void>;
}
