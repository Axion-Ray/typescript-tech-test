export const DataType = ["string", "date", "number"] as const;
export type TDataType = (typeof DataType)[number];

export type TFilterBase = {
  field: string;
  type: TDataType;
};

export type TFilter = TFreetextFilter | TCategoryFilter | TDateFilter;

export type TFreetextFilter = TFilterBase & {
  type: "string";
  value: string;
};

export type TCategoryFilter = TFilterBase & {
  type: "number";
  value: number;
};

export type TDateFilter = TFilterBase & {
  type: "date";
  value: Date;
};
