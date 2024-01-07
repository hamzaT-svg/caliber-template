"use client";

import { filterData } from "@/lib/utils";
import { useState, useMemo } from "react";

export function useColumn<T extends Record<string, any>>(columnsData: T[]) {
  const [checkedColumns, setCheckedColumns] = useState(
    columnsData.map((column) => column.dataIndex)
  );

  const visibleColumns = useMemo(
    () => filterData(columnsData, checkedColumns),
    [columnsData, checkedColumns]
  );

  return { visibleColumns, checkedColumns, setCheckedColumns };
}
