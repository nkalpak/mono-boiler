import { z } from "zod";

type ConfigSchemaType = z.infer<typeof ConfigSchema>;
const ConfigSchema = z.object({
  VITE_BACKEND_URL: z.string(),
});

let configCache: ConfigSchemaType | undefined = undefined;

function config(): ConfigSchemaType;
function config<TKey extends keyof ConfigSchemaType>(
  key: TKey
): ConfigSchemaType[TKey];
function config<TKey extends keyof ConfigSchemaType>(key?: TKey) {
  if (configCache != undefined) {
    return key ? configCache[key] : configCache;
  }

  const result = ConfigSchema.safeParse(import.meta.env);

  if (!result.success) {
    throw new Error(result.error.message);
  }

  return key ? result.data[key] : result.data;
}

config();

export { config };
