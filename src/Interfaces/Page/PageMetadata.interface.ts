import { Guard } from "../Guard/Guard.interface";
import { Layout } from "../Layout/Layour.interface";
import { Provider } from "../Provider/Provider.interface";
import { Route } from "../Route/RouteMetadata.interface";

export interface Page {
    route: Route;
    layout?: Layout;
    guards?: Guard[];
    providers?: Provider[];
}