import { ReactNode } from "react";

export interface InputOption {
  name: string;
  id: string;
}

export interface Route {
  label?: string;
  href?: string;
  onClick?: () => void;
  group?: string;
}

export interface Res {
  data: {
    total: number;
    limit: number;
    page: number;
    results: number;
  };
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface Entity {
  id: string;
  [key: string]: string | number | boolean | undefined | null;
}

export interface Section {
  heading?: string;
  children: ReactNode;
}

export interface ComponentsData {
  [key: string]: {
    description: ReactNode;
    ExampleComponent?: () => ReactNode;
    usage: string;
  };
}

export type RgbColor = [red: number, green: number, blue: number];
export type HslColor = [hue: number, saturation: number, lightness: number];
