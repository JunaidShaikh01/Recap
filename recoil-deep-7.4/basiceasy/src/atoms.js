import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 1,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 12,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 20,
});

export const totalAtom = selector({
  key: "totalAtom",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationAtomCount = get(notificationAtom);
    return (
      networkAtomCount +
      jobsAtomCount +
      messagingAtomCount +
      notificationAtomCount
    );
  },
});
