import type { BotHelper } from "../helpers/BotHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IConfig } from "../models/eft/common/IGlobals.ts";
import type { Inventory } from "../models/eft/common/tables/IBotType.ts";
import type { SeasonalEventType } from "../models/enums/SeasonalEventType.ts";
import type { IHttpConfig } from "../models/spt/config/IHttpConfig.ts";
import type { IQuestConfig } from "../models/spt/config/IQuestConfig.ts";
import type { ISeasonalEvent, ISeasonalEventConfig } from "../models/spt/config/ISeasonalEventConfig.ts";
import type { IWeatherConfig } from "../models/spt/config/IWeatherConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { GiftService } from "../services/GiftService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { DatabaseImporter } from "../utils/DatabaseImporter.ts";
export declare class SeasonalEventService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected databaseImporter: DatabaseImporter;
    protected giftService: GiftService;
    protected localisationService: LocalisationService;
    protected botHelper: BotHelper;
    protected profileHelper: ProfileHelper;
    protected configServer: ConfigServer;
    protected seasonalEventConfig: ISeasonalEventConfig;
    protected questConfig: IQuestConfig;
    protected httpConfig: IHttpConfig;
    protected weatherConfig: IWeatherConfig;
    protected halloweenEventActive: boolean;
    protected christmasEventActive: boolean;
    /** All events active at this point in time */
    protected currentlyActiveEvents: SeasonalEventType[];
    constructor(logger: ILogger, databaseServer: DatabaseServer, databaseImporter: DatabaseImporter, giftService: GiftService, localisationService: LocalisationService, botHelper: BotHelper, profileHelper: ProfileHelper, configServer: ConfigServer);
    protected get christmasEventItems(): string[];
    protected get halloweenEventItems(): string[];
    /**
     * Get an array of christmas items found in bots inventories as loot
     * @returns array
     */
    getChristmasEventItems(): string[];
    /**
     * Get an array of halloween items found in bots inventories as loot
     * @returns array
     */
    getHalloweenEventItems(): string[];
    itemIsChristmasRelated(itemTpl: string): boolean;
    itemIsHalloweenRelated(itemTpl: string): boolean;
    /**
     * Check if item id exists in christmas or halloween event arrays
     * @param itemTpl item tpl to check for
     * @returns
     */
    itemIsSeasonalRelated(itemTpl: string): boolean;
    /**
     * Get an array of seasonal items that should not appear
     * e.g. if halloween is active, only return christmas items
     * or, if halloween and christmas are inactive, return both sets of items
     * @returns array of tpl strings
     */
    getInactiveSeasonalEventItems(): string[];
    /**
     * Is a seasonal event currently active
     * @returns true if event is active
     */
    seasonalEventEnabled(): boolean;
    /**
     * Is christmas event active
     * @returns true if active
     */
    christmasEventEnabled(): boolean;
    /**
     * is halloween event active
     * @returns true if active
     */
    halloweenEventEnabled(): boolean;
    /**
     * Is detection of seasonal events enabled (halloween / christmas)
     * @returns true if seasonal events should be checked for
     */
    isAutomaticEventDetectionEnabled(): boolean;
    /**
     * Get a dictionary of gear changes to apply to bots for a specific event e.g. Christmas/Halloween
     * @param eventName Name of event to get gear changes for
     * @returns bots with equipment changes
     */
    protected getEventBotGear(eventType: SeasonalEventType): Record<string, Record<string, Record<string, number>>>;
    /**
     * Get the dates each seasonal event starts and ends at
     * @returns Record with event name + start/end date
     */
    getEventDetails(): ISeasonalEvent[];
    /**
     * Look up quest in configs/quest.json
     * @param questId Quest to look up
     * @param event event type (Christmas/Halloween/None)
     * @returns true if related
     */
    isQuestRelatedToEvent(questId: string, event: SeasonalEventType): boolean;
    /**
     * Handle seasonal events
     * @param sessionId Players id
     */
    enableSeasonalEvents(sessionId: string): void;
    protected cacheActiveEvents(): void;
    /**
     * Iterate through bots inventory and loot to find and remove christmas items (as defined in SeasonalEventService)
     * @param botInventory Bots inventory to iterate over
     * @param botRole the role of the bot being processed
     */
    removeChristmasItemsFromBotInventory(botInventory: Inventory, botRole: string): void;
    /**
     * Make adjusted to server code based on the name of the event passed in
     * @param sessionId Player id
     * @param globalConfig globals.json
     * @param eventName Name of the event to enable. e.g. Christmas
     */
    protected updateGlobalEvents(sessionId: string, globalConfig: IConfig, eventType: SeasonalEventType): void;
    protected adjustZryachiyMeleeChance(): void;
    protected enableHalloweenSummonEvent(): void;
    protected addEventBossesToMaps(eventType: SeasonalEventType): void;
    /**
     * Change trader icons to be more event themed (Halloween only so far)
     * @param eventType What event is active
     */
    protected adjustTraderIcons(eventType: SeasonalEventType): void;
    /**
     * Add lootble items from backpack into patrol.ITEMS_TO_DROP difficulty property
     */
    protected addLootItemsToGifterDropItemsList(): void;
    /**
     * Read in data from seasonalEvents.json and add found equipment items to bots
     * @param eventName Name of the event to read equipment in from config
     */
    protected addEventGearToBots(eventType: SeasonalEventType): void;
    protected addPumpkinsToScavBackpacks(): void;
    /**
     * Set Khorovod(dancing tree) chance to 100% on all maps that support it
     */
    protected enableDancingTree(): void;
    /**
     * Add santa to maps
     */
    protected addGifterBotToMaps(): void;
    /**
     * Send gift to player if they'e not already received it
     * @param playerId Player to send gift to
     * @param giftkey Key of gift to give
     */
    protected giveGift(playerId: string, giftkey: string): void;
    /**
     * Get the underlying bot type for an event bot e.g. `peacefullZryachiyEvent` will return `bossZryachiy`
     * @param eventBotRole Event bot role type
     * @returns Bot role as string
     */
    getBaseRoleForEventBot(eventBotRole: string): string;
    enableSnow(): void;
}
