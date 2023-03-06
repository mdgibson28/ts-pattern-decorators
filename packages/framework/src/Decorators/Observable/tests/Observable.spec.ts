import { Observable, Observer, Subscription } from "../Observable";

describe("Observable", () => {
    it("should be able to subscribe to an observable", () => {
        class Test {
            @Observable<string>
            public test: Observer<string>;
        }

        const test: Test = new Test();
        const observer: Observer<string> = test.test;
        const subscription: Subscription = observer.subscribe((newValue: string) => {
            expect(newValue).toBe("test2");
        });

        observer.next("test2");
        subscription.unsubscribe();
    });

    it("should be able to get the current value of an observable", () => {
        class Test {
            @Observable<string>
            public test: Observer<string>;
        }

        const test: Test = new Test();
        const observer: Observer<string> = test.test;
        observer.next("test");

        expect(observer.current()).toBe("test");
    });

    it("should be able to get the previous value of an observable", () => {
        class Test {
            @Observable<string>
            public test: Observer<string>;
        }

        const test: Test = new Test();
        const observer: Observer<string> = test.test;

        observer.next("test");
        observer.next("test2");
        expect(observer.previous()).toBe("test");
    });
});