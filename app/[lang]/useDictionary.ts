/* eslint-disable promise/always-return */
/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable promise/catch-or-return */
'use client';

import { useEffect, useState } from 'react';
import { Locale, Dictionary, getDictionary } from './dictionaries';
import { useParams } from 'next/navigation';

export function useDictionary() {
  const [dictionary, setDictionary] = useState<Dictionary | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();

  const locale = params['lang'] as Locale;

  useEffect(() => {
    let mounted = true;

    getDictionary(locale).then((dict: Dictionary) => {
      if (mounted) {
        setDictionary(dict);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [locale]);

  return { dictionary, loading };
}
