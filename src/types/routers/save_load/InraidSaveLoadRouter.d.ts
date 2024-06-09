import { HandledRoute, SaveLoadRouter } from "../../di/Router.d.ts";
import { IAkiProfile } from "../../models/eft/profile/IAkiProfile.d.ts";
export declare class InraidSaveLoadRouter extends SaveLoadRouter {
    getHandledRoutes(): HandledRoute[];
    handleLoad(profile: IAkiProfile): IAkiProfile;
}
