import {
    APPLICATION_MODULES,
    APPLICATION_TOKEN,
    INJECTABLE_TOKEN,
} from "../../Constants";
import { Type } from "../Type.interface";

export abstract class AbstractApp {
    getToken(): string {
        return APPLICATION_TOKEN + this.constructor.name;
    }
}
