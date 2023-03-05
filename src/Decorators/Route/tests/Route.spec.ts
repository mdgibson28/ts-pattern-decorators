import { Route } from "../Route";
import { Provider } from "../../Provider";
import "reflect-metadata";
import { INJECTABLE_NAME, PRESENTER_TOKEN, STATE_TOKEN } from "../../../Constants";
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
            state: {
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
            state: {
                path: "/"
            },
            presenter: TestPresenter
        })
        class TestRoute {}

        const presenterMetadata = getMetadata(TestRoute, PRESENTER_TOKEN);
        expect(presenterMetadata).toEqual(TestPresenter);
        
        const stateMetadata = getMetadata(TestRoute, STATE_TOKEN);
        expect(stateMetadata).toEqual({ path: "/" });
    });
});
