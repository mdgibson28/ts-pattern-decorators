import { Class } from "./Class.interface";

export type ClassInjection<T> = {prototype: Class<T>, instance: T}