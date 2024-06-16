import type { ILoginRequestData } from "../launcher/ILoginRequestData.ts";
export interface IRegisterData extends ILoginRequestData {
    edition: string;
}
