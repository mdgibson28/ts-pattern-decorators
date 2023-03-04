export interface PresenterDependencies {
    // will need to define the interface required to mount whatever presenter is being used.
    interface: {
        mount: () => any;
    }
}
