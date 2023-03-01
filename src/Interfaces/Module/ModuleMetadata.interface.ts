import { Page } from "../Page/PageMetadata.interface";
import { Provider } from "../Provider/Provider.interface";
import { Module } from "./Module.interface";

export interface ModuleMetadata {
    pages?: Page[];
    providers?: Provider[];
    modules?: Module[];
    
}