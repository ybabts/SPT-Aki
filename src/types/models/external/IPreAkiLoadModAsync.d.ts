import type { DependencyContainer } from "npm:tsyringe@4.2.0";
export interface IPreAkiLoadModAsync {
    preAkiLoadAsync(container: DependencyContainer): Promise<void>;
}
