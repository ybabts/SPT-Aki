import { ContextVariable } from "../context/ContextVariable.d.ts";
import { ContextVariableType } from "../context/ContextVariableType.d.ts";
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
