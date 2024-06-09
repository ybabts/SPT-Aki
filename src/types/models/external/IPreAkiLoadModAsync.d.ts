import type { DependencyContainer } from "npm:tsyringe";
export interface IPreAkiLoadModAsync {
    preAkiLoadAsync(container: DependencyContainer): Promise<void>;
}
