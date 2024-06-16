import type { HandledRoute, SaveLoadRouter } from "../../di/Router.ts";
import type { IAkiProfile } from "../../models/eft/profile/IAkiProfile.ts";
export declare class HealthSaveLoadRouter extends SaveLoadRouter {
    getHandledRoutes(): HandledRoute[];
    handleLoad(profile: IAkiProfile): IAkiProfile;
}
