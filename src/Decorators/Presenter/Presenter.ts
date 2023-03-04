export function Presenter(): ClassDecorator {
    return (prototype) => {
        return prototype;
    };
}