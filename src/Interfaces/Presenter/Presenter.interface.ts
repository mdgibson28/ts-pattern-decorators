import { Type } from "../Type.interface";

export interface Presenter extends Type {
    mount: () => void;   
}