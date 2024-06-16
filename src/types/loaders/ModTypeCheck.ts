import type { IPostAkiLoadMod } from "../models/external/IPostAkiLoadMod.ts";
import type { IPostAkiLoadModAsync } from "../models/external/IPostAkiLoadModAsync.ts";
import type { IPostDBLoadMod } from "../models/external/IPostDBLoadMod.ts";
import type { IPostDBLoadModAsync } from "../models/external/IPostDBLoadModAsync.ts";
import type { IPreAkiLoadMod } from "../models/external/IPreAkiLoadMod.ts";
import type { IPreAkiLoadModAsync } from "../models/external/IPreAkiLoadModAsync.ts";
export declare class ModTypeCheck {
    /**
     * Use defined safe guard to check if the mod is a IPreAkiLoadMod
     * @returns boolean
     */
    isPreAkiLoad(mod: any): mod is IPreAkiLoadMod;
    /**
     * Use defined safe guard to check if the mod is a IPostAkiLoadMod
     * @returns boolean
     */
    isPostAkiLoad(mod: any): mod is IPostAkiLoadMod;
    /**
     * Use defined safe guard to check if the mod is a IPostDBLoadMod
     * @returns boolean
     */
    isPostDBAkiLoad(mod: any): mod is IPostDBLoadMod;
    /**
     * Use defined safe guard to check if the mod is a IPreAkiLoadModAsync
     * @returns boolean
     */
    isPreAkiLoadAsync(mod: any): mod is IPreAkiLoadModAsync;
    /**
     * Use defined safe guard to check if the mod is a IPostAkiLoadModAsync
     * @returns boolean
     */
    isPostAkiLoadAsync(mod: any): mod is IPostAkiLoadModAsync;
    /**
     * Use defined safe guard to check if the mod is a IPostDBLoadModAsync
     * @returns boolean
     */
    isPostDBAkiLoadAsync(mod: any): mod is IPostDBLoadModAsync;
    /**
     * Checks for mod to be compatible with 3.X+
     * @returns boolean
     */
    isPostV3Compatible(mod: any): boolean;
}
