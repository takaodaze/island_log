export type Island = {
  id: number;
  name: string;
};

export const isLandList: Island[] = [
  { id: 1, name: "XXX島" },
  { id: 2, name: "YYY島" },
  { id: 3, name: "ZZZ島" },
  { id: 4, name: "hoge島" },
  { id: 5, name: "foo島" },
  { id: 6, name: "bar島" },
];

export const myIslandList: Island[] = [
  { id: 1, name: "XXX島" },
  { id: 4, name: "hoge島" },
];
