import React from "react";
import { Store } from "../_lib/types";

type StoresContainerProps = {
  stores: readonly Store[];
  render: (store: Store, index: number) => React.JSX.Element;
};
export default function StoresContainer({
  stores,
  render,
}: StoresContainerProps) {
  return stores.map(render);
}
