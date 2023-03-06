import { Class } from "./Class.type";

export type ClassInjection<T> = {prototype: Class<T>, instance: T}