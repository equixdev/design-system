'use client';

import { LandingLayout } from '@/equix/Landing/LandingLayout';
import { Box } from '@/equix/components/Box';
import { Code } from '@/equix/components/Code';
import { H2, H3 } from '@/equix/components/Heading';
import { Input } from '@/equix/components/Input';
import { HslColor, RgbColor } from '@/equix/types';
import { getContrastBetweenTwoRgbColors, hslToRgb } from '@/equix/utils';
import { useState } from 'react';
import { useDictionary } from '../../useDictionary';

const rgbWhite: RgbColor = [255, 255, 255];
const rgbBlack: RgbColor = [0, 0, 0];

const hslArrayToCss = ([hue, saturation, lightness]: HslColor) =>
  `hsl(${hue}, ${saturation}%, ${lightness}%)`;

const Page = () => {
  const [hue, setHue] = useState('270');

  const [lightColor, setLightColor] = useState<HslColor | undefined>();
  const [darkColor, setDarkColor] = useState<HslColor | undefined>();
  const [accentColor, setAccentColor] = useState<HslColor | undefined>();
  const [borderColor, setBorderColor] = useState<HslColor | undefined>();

  const { dictionary } = useDictionary();

  const getLightColor = () => {
    for (let index = 100; index > 0; index--) {
      const hsl: HslColor = [parseInt(hue), 100, index];
      const rgb = hslToRgb(hsl);

      if (getContrastBetweenTwoRgbColors(rgbWhite, rgb) >= 1.1) {
        setLightColor(hsl);

        break;
      }
    }
  };

  const getBorderColor = () => {
    for (let index = 100; index > 0; index--) {
      const hsl: HslColor = [parseInt(hue), 100, index];
      const rgb = hslToRgb(hsl);

      if (
        lightColor &&
        getContrastBetweenTwoRgbColors(hslToRgb(lightColor), rgb) >= 1.1
      ) {
        setBorderColor(hsl);

        break;
      }
    }
  };

  const getDarkColor = () => {
    for (let index = 0; index < 100; index++) {
      const hsl: HslColor = [parseInt(hue), 100, index];
      const rgb = hslToRgb(hsl);

      if (getContrastBetweenTwoRgbColors(rgbBlack, rgb) >= 1.1) {
        setDarkColor(hsl);

        break;
      }
    }
  };

  const getAccentColor = () => {
    for (let index = 100; index > 0; index--) {
      const hsl: HslColor = [parseInt(hue), 100, index];
      const rgb = hslToRgb(hsl);

      if (
        lightColor &&
        getContrastBetweenTwoRgbColors(hslToRgb(lightColor), rgb) >= 4.5
      ) {
        setAccentColor(hsl);

        break;
      }
    }
  };

  const handleGenerate = () => {
    getLightColor();
    getBorderColor();
    getDarkColor();
    getAccentColor();
  };

  if (!dictionary) return null;

  return (
    <LandingLayout>
      <H2>{dictionary.tools.colorScheme.title}</H2>
      <p>{dictionary.tools.colorScheme.description}</p>
      <Input label="Hue" value={hue} onChange={setHue} size={3} />
      {hue ? (
        <Box onClick={handleGenerate}>
          {dictionary.tools.colorScheme.generateButton}
        </Box>
      ) : undefined}
      {lightColor && borderColor && accentColor && darkColor ? (
        <>
          <H3>{dictionary.tools.colorScheme.result}</H3>
          <Code>
            {`// tailwind.config.js
                module.exports = {
                    theme: {
                        extend: {
                            colors: {
                                light: "${hslArrayToCss(lightColor)}",
                                border: "${hslArrayToCss(borderColor)}",
                                accent: "${hslArrayToCss(accentColor)}",
                                dark: "${hslArrayToCss(darkColor)}",
                            }
                            ...
                        }
                        ...
                    }
                    ...    
                }
            `}
          </Code>
        </>
      ) : undefined}
    </LandingLayout>
  );
};

export default Page;
