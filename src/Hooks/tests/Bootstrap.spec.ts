import { APPLICATION_TOKEN, INJECTABLE_TOKEN, INJECTION_TYPE_MODULE, INJECTION_TYPE_PROVIDER } from "../../Constants";
import { Module, Provider } from "../../Decorators";
import { useBootstrap } from "../Bootstrap";
import 'reflect-metadata';

describe('useBootstrap', () => {

  it('should mount a module', () => {
    @Module()
    class TestModule {}

    useBootstrap([TestModule]);

    const moduleToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestModule);
    expect(moduleToken).toBe(INJECTION_TYPE_MODULE);

    const module = globalThis[APPLICATION_TOKEN][INJECTION_TYPE_MODULE][TestModule];

    expect(module instanceof TestModule).toBe(true);
  });

  it('should mount a module with a provider provider', () => {
    @Provider()
    class TestProvider {}

    @Module({
      providers: [TestProvider],
    })
    class TestModule {}

    useBootstrap([TestModule]);

    const moduleToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestModule);
    expect(moduleToken).toBe(INJECTION_TYPE_MODULE);

    const providerToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestProvider);
    expect(providerToken).toBe(INJECTION_TYPE_PROVIDER);

    const module = globalThis[APPLICATION_TOKEN][INJECTION_TYPE_MODULE][TestModule];
    const provider = module[INJECTION_TYPE_PROVIDER][TestProvider];

    expect(module instanceof TestModule).toBe(true);
    expect(provider instanceof TestProvider).toBe(true);
  });
});