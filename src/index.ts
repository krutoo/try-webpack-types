import type { Configuration } from "webpack";

function createFactory<T>(): () => T {
  return () => null as unknown as T;
}

export const factories = {
  output: createFactory<Configuration["output"]>(),
};
