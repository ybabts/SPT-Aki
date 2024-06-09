import { HandledRoute, SaveLoadRouter } from "../../di/Router.d.ts";
import { IAkiProfile } from "../../models/eft/profile/IAkiProfile.d.ts";
export declare class ProfileSaveLoadRouter extends SaveLoadRouter {
    getHandledRoutes(): HandledRoute[];
    handleLoad(profile: IAkiProfile): IAkiProfile;
}
