const { getDictionary } = require('../dictionaries');

const dictionaries = {
  en: { Hi: 'Hello' },
  nl: { Hi: 'Wilkommen' },
};

describe('getDictionary function', () => {
  it('should return English dictionary for "en" locale', async () => {
    const result = await getDictionary('en');
    expect(result).toEqual(dictionaries.en);
  });

  it('should return Dutch dictionary for "nl" locale', async () => {
    const result = await getDictionary('nl');
    expect(result).toEqual(dictionaries.nl);
  });

  it('should reject with error for unknown locale', async () => {
    await expect(getDictionary('fr')).rejects.toThrow('Locale not found');
  });
});
