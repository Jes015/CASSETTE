export const adaptResponse = <T>(statusCode: number, data: T) => {
  return { statusCode, data };
};
