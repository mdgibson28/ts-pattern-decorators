import { INJECTABLE_TOKEN, MODULE_TOKEN } from "../../Constants";
import { Injectable, Module } from "../../Decorators";
import { useBootstrap } from "../Bootstrap";
import 'reflect-metadata';


class TestModule {
  name = 'Test Module';
}

class TestProvider {
  name = 'Test Provider';
}

describe('useBootstrap', () => {
  it('should mount all providers to the module singletons', () => {
    @Injectable()
    class TestProvider {}

    @Module({
      providers: [TestProvider],
    })
    class TestModule {}

    useBootstrap([TestModule]);

    const moduleToken = MODULE_TOKEN + Reflect.getMetadata(MODULE_TOKEN, TestModule).name;
    const module = globalThis[moduleToken];
    const providerToken = INJECTABLE_TOKEN + Reflect.getMetadata(INJECTABLE_TOKEN, TestProvider).name;
    const provider = module[providerToken];

    expect(module instanceof TestModule).toBe(true);
    expect(provider instanceof TestProvider).toBe(true);
  });
});