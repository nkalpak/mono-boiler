import { DefaultApiFp } from "@replaceme/api";

const api = DefaultApiFp({
  // TODO: Make a separate config file
  basePath: import.meta.env.VITE_BACKEND_URL as string,
  isJsonMime: (mime: string) => {
    const jsonMime = new RegExp(
      "^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$",
      "i"
    );
    return (
      mime !== null &&
      (jsonMime.test(mime) ||
        mime.toLowerCase() === "application/json-patch+json")
    );
  },
});

export { api };
