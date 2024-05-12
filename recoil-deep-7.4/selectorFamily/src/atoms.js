import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "selectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});
