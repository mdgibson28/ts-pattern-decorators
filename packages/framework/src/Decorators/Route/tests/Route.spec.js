var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Route } from "../Route";
import "reflect-metadata";
import { ROUTE_CONFIG_TOKEN, INJECTABLE_NAME, PRESENTER_TOKEN } from "../../../Constants";
import { getMetadata } from "../../../Helpers/Metadata";
import { Presenter } from "../../Presenter";
describe("Module", function () {
    it("should be defined", function () {
        expect(Route).toBeDefined();
    });
    it("should define an injectable name", function () {
        var TestPresenter = /** @class */ (function () {
            function TestPresenter() {
            }
            TestPresenter = __decorate([
                Presenter()
            ], TestPresenter);
            return TestPresenter;
        }());
        var TestRoute = /** @class */ (function () {
            function TestRoute() {
            }
            TestRoute = __decorate([
                Route({
                    config: {
                        path: "/"
                    },
                    presenter: TestPresenter
                })
            ], TestRoute);
            return TestRoute;
        }());
        var metadata = getMetadata(TestRoute, INJECTABLE_NAME);
        expect(metadata).toEqual("TestRoute");
    });
    it("should define metadata", function () {
        var TestPresenter = /** @class */ (function () {
            function TestPresenter() {
            }
            TestPresenter = __decorate([
                Presenter()
            ], TestPresenter);
            return TestPresenter;
        }());
        var TestRoute = /** @class */ (function () {
            function TestRoute() {
            }
            TestRoute = __decorate([
                Route({
                    config: {
                        path: "/"
                    },
                    presenter: TestPresenter
                })
            ], TestRoute);
            return TestRoute;
        }());
        var presenterMetadata = getMetadata(TestRoute, PRESENTER_TOKEN);
        expect(presenterMetadata).toEqual(TestPresenter);
        var stateMetadata = getMetadata(TestRoute, ROUTE_CONFIG_TOKEN);
        expect(stateMetadata).toEqual({ path: "/" });
    });
});
