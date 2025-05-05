import { Option } from "../types/option.type";

// const options: Option[] = [
//   {
//     blockId: "6176cdad-8fee-4373-ace0-f444fa71e00f",
//     blockDisplayValue: "0",
//     blockColor: "#00FF00",
//   },
//   {
//     blockId: "7d261d77-6818-4672-ab0a-516a2614de4e",
//     blockDisplayValue: "28",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "6d09b601-4048-4240-93b7-37bba2d3ea9f",
//     blockDisplayValue: "9",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "309ca1a0-4373-40bf-819c-13082ce1765b",
//     blockDisplayValue: "26",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "3427483e-956c-4a85-8140-30468f484565",
//     blockDisplayValue: "30",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "0c82f6cd-b944-4bb2-8857-3d13f51487b4",
//     blockDisplayValue: "11",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "2f1db76c-37b7-4405-a4ea-95206b4ccf9e",
//     blockDisplayValue: "7",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "08f7693e-46eb-4893-a046-ac949cf7c0a7",
//     blockDisplayValue: "20",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "37a8e171-8873-48e7-9ead-25bf4339478f",
//     blockDisplayValue: "32",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "0bbd07f4-d3ab-406f-9530-968bacd0bd00",
//     blockDisplayValue: "17",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "15850ddf-92a9-4793-8afd-e1009fb0b7b6",
//     blockDisplayValue: "5",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "d5f127b5-f974-42e4-a2ac-71085ee642b6",
//     blockDisplayValue: "22",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "fe9f511e-a24d-4960-8eeb-c8e9cf518c18",
//     blockDisplayValue: "34",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "0600f711-977f-4880-98b2-ef334e682e53",
//     blockDisplayValue: "15",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "d80047cf-bc16-4a67-82b7-a6a3029d83a4",
//     blockDisplayValue: "3",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "e968eb79-e23d-462f-8fb4-7685ef426af8",
//     blockDisplayValue: "24",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "680b82c5-ee81-49b6-9012-98e63a0c8263",
//     blockDisplayValue: "36",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "5bce5057-5d10-400d-829f-4ac26a69f93f",
//     blockDisplayValue: "13",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "a70286bc-86b2-4344-a2a6-3bebb2d3a1d1",
//     blockDisplayValue: "1",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "44baf5a8-e69a-47e3-8337-f450c8c4cefc",
//     blockDisplayValue: "00",
//     blockColor: "#00FF00",
//   },
//   {
//     blockId: "cc5e190f-af40-40db-b0fb-37d119eded1b",
//     blockDisplayValue: "27",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "85b99a62-e094-4493-a36b-13fa56a1f313",
//     blockDisplayValue: "10",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "52ab5e8d-918d-47b5-8f26-5fad663025e3",
//     blockDisplayValue: "25",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "bafda870-d5b1-41d1-901c-f26af2f44108",
//     blockDisplayValue: "29",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "3a365c49-1ac7-4470-9938-445ccbaeda8d",
//     blockDisplayValue: "12",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "93925d53-e79a-4bfc-af19-4be9247c960f",
//     blockDisplayValue: "8",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "ced23cc3-de8d-4d61-b4c6-7f261d005155",
//     blockDisplayValue: "19",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "e7e957c2-e59a-4115-bb7e-1ca16bc9d967",
//     blockDisplayValue: "31",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "2096420b-cc0d-48ea-b700-5d719bd58616",
//     blockDisplayValue: "18",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "db441591-3ac1-4aa1-b5c2-9da2c22bcf4d",
//     blockDisplayValue: "6",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "6c573b12-ddd8-4e37-8bee-5125655054d5",
//     blockDisplayValue: "21",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "83fe0a3a-3e03-43e7-bb19-53452e9550e4",
//     blockDisplayValue: "33",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "325718bf-ee0c-4933-bc97-f10e75f31261",
//     blockDisplayValue: "16",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "abc5d6c4-d748-4ca0-9a2f-1dc794d19875",
//     blockDisplayValue: "4",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "a5eac2c3-45ac-4b1f-9b78-3ad5037ab8e2",
//     blockDisplayValue: "23",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "58a2e9c6-1f63-4b81-b4bc-4bb01760dc55",
//     blockDisplayValue: "35",
//     blockColor: "#000000",
//   },
//   {
//     blockId: "8ddc8573-d04a-460d-8560-c76243ba6acb",
//     blockDisplayValue: "14",
//     blockColor: "#FF0000",
//   },
//   {
//     blockId: "c964f53f-9e09-4b61-af7e-9a6b2c5de4c3",
//     blockDisplayValue: "2",
//     blockColor: "#000000",
//   },
// ];

const options: Option[] = [
  {
    blockId: "6176cdad-8fee-4373-ace0-f444fa71e00f",
    blockDisplayValue: "0",
    blockColor: "#00FF00",
  },
  {
    blockId: "a70286bc-86b2-4344-a2a6-3bebb2d3a1d1",
    blockDisplayValue: "1",
    blockColor: "#FF0000",
  },
  {
    blockId: "c964f53f-9e09-4b61-af7e-9a6b2c5de4c3",
    blockDisplayValue: "2",
    blockColor: "#000000",
  },
  {
    blockId: "d80047cf-bc16-4a67-82b7-a6a3029d83a4",
    blockDisplayValue: "3",
    blockColor: "#FF0000",
  },
  {
    blockId: "abc5d6c4-d748-4ca0-9a2f-1dc794d19875",
    blockDisplayValue: "4",
    blockColor: "#000000",
  },
  {
    blockId: "15850ddf-92a9-4793-8afd-e1009fb0b7b6",
    blockDisplayValue: "5",
    blockColor: "#FF0000",
  },
  {
    blockId: "db441591-3ac1-4aa1-b5c2-9da2c22bcf4d",
    blockDisplayValue: "6",
    blockColor: "#000000",
  },
  {
    blockId: "2f1db76c-37b7-4405-a4ea-95206b4ccf9e",
    blockDisplayValue: "7",
    blockColor: "#FF0000",
  },
  {
    blockId: "93925d53-e79a-4bfc-af19-4be9247c960f",
    blockDisplayValue: "8",
    blockColor: "#000000",
  },
  {
    blockId: "6d09b601-4048-4240-93b7-37bba2d3ea9f",
    blockDisplayValue: "9",
    blockColor: "#FF0000",
  },

];

export default options;
