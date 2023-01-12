import dayjs from "dayjs";

export const sortByDate = (a: string, b: string) => {
  if (dayjs(a).isAfter(b)) return 1;
  if (dayjs(a).isSame(b)) return 0;
  return -1;
}