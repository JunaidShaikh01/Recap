import React from "react";
import axios from "axios";
import { notifications, totalNotificationSelector } from "../state/atoms";
import { useRecoilValue } from "recoil";

export default function MianApp() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}
