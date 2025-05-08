/* eslint-disable @typescript-eslint/no-explicit-any */
const sortDataByDate = (data: any[], key: string) =>
  data.sort(
    (a: any, b: any) => new Date(a[key]).getTime() - new Date(b[key]).getTime()
  );

export { sortDataByDate };
