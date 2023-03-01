import { Module } from "../Module/Module.interface";

export interface AppMetadata {
    selector: string;       // the selector of the html element where the app will be mounted
    modules?: Module[];
}