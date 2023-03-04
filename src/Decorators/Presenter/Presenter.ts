import { PresenterDependencies } from "../../Interfaces/Presenter/PresenterDependencies.interface";

export function Presenter(dependencies:PresenterDependencies = {}): ClassDecorator {
    return (prototype) => {
        return prototype;
    };
}