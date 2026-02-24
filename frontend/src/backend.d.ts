import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Dealer {
    city: string;
    name: string;
    state: string;
    address: string;
    phone: string;
}
export interface Inquiry {
    subject: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllDealers(): Promise<Array<Dealer>>;
    getDealersByCity(city: string): Promise<Array<Dealer>>;
    getDealersByState(state: string): Promise<Array<Dealer>>;
    submitInquiry(inquiry: Inquiry): Promise<boolean>;
}
