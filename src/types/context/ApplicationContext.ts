import type { ContextVariable } from "../context/ContextVariable.ts";
import type { ContextVariableType } from "../context/ContextVariableType.ts";
export declare class ApplicationContext {
    private variables;
    private static holderMaxSize;
    /**
     * Called like:
     * ```
     * const registerPlayerInfo = this.applicationContext.getLatestValue(ContextVariableType.REGISTER_PLAYER_REQUEST).getValue<IRegisterPlayerRequestData>();
     *
     * const activePlayerSessionId = this.applicationContext.getLatestValue(ContextVariableType.SESSION_ID).getValue<string>();
     *
     * const matchInfo = this.applicationContext.getLatestValue(ContextVariableType.RAID_CONFIGURATION).getValue<IGetRaidConfigurationRequestData>();
     * ```
     */
    getLatestValue(type: ContextVariableType): ContextVariable;
    getValues(type: ContextVariableType): ContextVariable[];
    addValue(type: ContextVariableType, value: any): void;
    clearValues(type: ContextVariableType): void;
}
