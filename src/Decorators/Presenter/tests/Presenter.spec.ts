import { Presenter } from '..';
import { INJECTABLE_NAME } from '../../../Constants';

describe('Presenter', () => {
    const mockDeps = {
        interface: {
            mount: () => { return; }
        }
    };

    it("should be defined", () => {
        expect(Presenter).toBeDefined();
    });

    it('should define an injectable name', () => {
        @Presenter(mockDeps)
        class TestPresenter {}

        const metadata = Reflect.getMetadata(INJECTABLE_NAME, TestPresenter);
        expect(metadata).toEqual("TestPresenter");
    });

    it("should define metadata", () => {
        @Presenter(mockDeps)
        class TestPresenter {}

        const metadata = Reflect.getMetadata("interface", TestPresenter);
        expect(metadata).toBe(mockDeps.interface);
    });
});
