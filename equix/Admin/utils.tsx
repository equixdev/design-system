import Image from "next/image";
import { EXCHANGE_UNITS_IN_CURRENCY, UNITS_IN_RATING_STAR } from "../consts";
import { Entity } from "../types";
import { capitalize, toOptions } from "../utils";
import config from "./config";

export const getKeyType = (entitiesName: string, key: string) => {
  type EntityName = keyof typeof config.entities;

  const name = capitalize(entitiesName.slice(0, -1)) as EntityName;

  return (config.entities[name] as any)[key];
};

export const getInputType = (entitiesName: string, key: string, value: any) => {
  const keyType = getKeyType(entitiesName, key);

  if (value?.toString().match(/\.(?:bmp|gif|jpe?g|png|tiff?|webp)$/u)) {
    return "image";
  }

  switch (keyType) {
    case "string":
    case "string[]":
    case "any":
    case "number": {
      return "text";
    }
    case "Date": {
      return "date";
    }

    default: {
      return "radio";
    }
  }
};

export const getNonHiddenEntityEntries = (
  initialEntity: Object,
  entitiesName: string
) => {
  type HiddenField = keyof typeof config.hidden_fields;

  return Object.entries(initialEntity).filter(
    ([key]) =>
      !(
        config.hidden_fields.ALL.includes(key) ||
        config.hidden_fields[entitiesName as HiddenField]?.includes(key)
      )
  );
};

export const getOptions = (entitiesName: string, key: string) => {
  type KeyEnum = keyof typeof config.enums;

  const keyEnum =
    config.enums[capitalize(key) as KeyEnum] ||
    config.enums[
      (capitalize(entitiesName.slice(0, -1)) + capitalize(key)) as KeyEnum
    ];

  return keyEnum ? toOptions(Object.keys(keyEnum)) : toOptions(["true"]);
};

export const getEntityTemplate = (entitiesName: string) => {
  type EntityName = keyof typeof config.entities;

  const entity =
    config?.entities[capitalize(entitiesName?.slice(0, -1)) as EntityName];

  return (
    entity
      ? Object.fromEntries(Object.entries(entity)?.map(([key]) => [key, ""]))
      : {}
  ) as Entity;
};

export const getAdditionalEntitiesEndpoints = (entitiesName: string) => {
  type EntityName = keyof typeof config.additional_entities_endpoints;

  return config.additional_entities_endpoints[
    capitalize(entitiesName as string) as EntityName
  ];
};

export const renderValue = (key: string, value: any) => {
  switch (true) {
    case Object.keys(value).length === 0:
    case value === null: {
      return "";
    }
    case key.toLowerCase().includes("fee"): {
      return `${value * EXCHANGE_UNITS_IN_CURRENCY}%`;
    }
    case key === "cashLimit" ||
      key === "amount" ||
      key.toLowerCase().includes("balance") ||
      key.toLowerCase().includes("price"): {
      return value / EXCHANGE_UNITS_IN_CURRENCY;
    }
    case Boolean(parseInt(value)):
    case key.toLowerCase().includes("rating"): {
      return String(
        Math.round(value * UNITS_IN_RATING_STAR) / UNITS_IN_RATING_STAR
      );
    }
    case /^-?(?:[1-9]\d*)?\d{4}-(?:0[1-9]|1[0-2])-(?:3[01]|0[1-9]|[12]\d)T(?:2[0-3]|[01]\d)(?::[0-5]\d){2}(?:.\d+)?Z?$/u.test(
      value
    ): {
      return new Date(value).toLocaleDateString("ru");
    }
    case typeof value === "string" && (value as string).includes(".jpeg"): {
      return (
        <Image
          src={value}
          height={40}
          width={40}
          className="rounded"
          alt=""
        />
      );
    }

    default: {
      return value;
    }
  }
};

export const isKeyCollapsedInAllEntities = (key: string) =>
  (config.collapsed_fields.ALL as string[]).includes(key);

export const isKeyHiddenInAllEntities = (key: string) =>
  config.hidden_fields.ALL.includes(key);

export const isKeyCollapsedInCurrentEntity = (
  key: string,
  entitiesName: string
) => {
  type CollapsedField = keyof typeof config.collapsed_fields;

  if (Object.keys(config.collapsed_fields).includes(capitalize(entitiesName))) {
    const collapsedFields =
      config.collapsed_fields[capitalize(entitiesName) as CollapsedField];

    return collapsedFields.filter(Boolean).includes(key);
  }

  return false;
};

export const isKeyHiddenInCurrentEntity = (
  key: string,
  entitiesName: string
) => {
  type HiddenField = keyof typeof config.hidden_fields;

  if (Object.keys(config.hidden_fields).includes(capitalize(entitiesName))) {
    const hiddenFields =
      config.hidden_fields[capitalize(entitiesName) as HiddenField];

    return hiddenFields.filter(Boolean).includes(key);
  }

  return false;
};

export const getNonHiddenAndNonCollapsedEntityEntries = (
  entity: Entity,
  entitiesName: string
) =>
  Object.entries(entity).filter(
    ([key]) =>
      !(
        isKeyCollapsedInAllEntities(key) ||
        isKeyHiddenInAllEntities(key) ||
        isKeyCollapsedInCurrentEntity(key, entitiesName) ||
        isKeyHiddenInCurrentEntity(key, entitiesName)
      )
  );

export const getSortedEntities = (sortKey: string, entities: Entity[]) =>
  sortKey
    ? entities.sort((entity1, entity2) =>
        (entity1 as any)[sortKey]
          ?.toString()
          .localeCompare((entity2 as any)[sortKey].toString())
      )
    : entities;
