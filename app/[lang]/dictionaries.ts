const dictionaries = {
  en: async () => {
    const dictionary = await import("@/dictionaries/en.json");

    return dictionary.default;
  },
  ru: async () => {
    const dictionary = await import("@/dictionaries/ru.json");

    return dictionary.default;
  },
};

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) =>
  dictionaries[locale as Locale]();
