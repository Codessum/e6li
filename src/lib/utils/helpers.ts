import { hasContext, getContext, setContext } from "svelte";

/**
 * Declares a strictly typed getter and setter for a context
 * variable, utilizing Svelte's getContext and setContext.
 */
export function declareContextPair<T>(contextKey: string) {
  return {
    get: <T>() => {
      if(hasContext(contextKey)) return getContext<T>(contextKey);
      throw new Error(`No context value found for key "${contextKey}"`);
    },
    set: (value: T) => {
      return setContext<T>(contextKey, value);
    }
  }
}

