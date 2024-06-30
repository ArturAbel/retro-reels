import { customAlphabet } from "nanoid";

export const generateId = () => {
  const customNanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    10
  );
  const generatedId = customNanoid();
};
