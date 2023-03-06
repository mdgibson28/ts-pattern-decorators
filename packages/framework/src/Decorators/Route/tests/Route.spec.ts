import { Route } from "../Route";
import "reflect-metadata";
import { ROUTE_CONFIG_TOKEN, INJECTABLE_NAME, PRESENTER_TOKEN } from "../../../Constants";
import { getMetadata } from "../../../Helpers/Metadata";
import { Presenter } from "../../Presenter";

describe("Module", () => {
    it("should be defined", () => {
        expect(Route).toBeDefined();
    });
    
    it("should define an injectable name", () => {
        @Presenter()
        class TestPresenter {}

        @Route({
            config: {
                path: "/"
            },
            presenter: TestPresenter
        })
        class TestRoute {}

        const metadata = getMetadata(TestRoute, INJECTABLE_NAME);
        expect(metadata).toEqual("TestRoute");
    });

    it("should define metadata", () => {
        @Presenter()
        class TestPresenter {}

        @Route({
            config: {
                path: "/"
            },
            presenter: TestPresenter
        })
        class TestRoute {}

        const presenterMetadata = getMetadata(TestRoute, PRESENTER_TOKEN);
        expect(presenterMetadata).toEqual(TestPresenter);
        
        const stateMetadata = getMetadata(TestRoute, ROUTE_CONFIG_TOKEN);
        expect(stateMetadata).toEqual({ path: "/" });
    });
});
