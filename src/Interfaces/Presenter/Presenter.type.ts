import { Type } from "../Type.interface";

export interface PresenterType extends Type {
    mount: () => void;   
}