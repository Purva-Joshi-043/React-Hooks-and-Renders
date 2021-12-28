import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function UseContextComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default UseContextComponentE;
