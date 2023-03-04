import { Provider } from "../Provider/Provider.interface";
import { Module } from "./Module.interface";

export interface ModuleDependencies {
    providers?: Provider[];
    modules?: Module[];
    
}