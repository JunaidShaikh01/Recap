import React from "react";
import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalAtom,
} from "../atoms";

export default function MainApp() {
  const netwokAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const totalAtomCount = useRecoilValue(totalAtom);
  return (
    <div>
      <button>Home</button>
      <button>
        My Networks({netwokAtomCount >= 100 ? "99+" : netwokAtomCount})
      </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messages({messagingAtomCount})</button>
      <button>Notification({notificationAtomCount})</button>
      <button>Me ({totalAtomCount > 100 ? "99+" : totalAtom})</button>
    </div>
  );
}
