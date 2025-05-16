import { Option } from "../types/option.type";
import { Row } from "../types/row.type";

export const getTableBlocks = (blocks: Option[]): Row[] => {
  const tableBlocks: Row[] = blocks.map((block, index) => {
    return {
      n: block.blockDisplayValue,
      className:
        index % 2 === 0
          ? "black cella chip-container-cella"
          : "red cella chip-container-cella",
      visible: false,
      bet: 0,
    };
  });

  return tableBlocks;
};
