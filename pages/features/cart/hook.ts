import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export type ReceivedProps = Record<string, any>;

const socket = io("ws://localhost:3001");

const useCart = (props: ReceivedProps) => {
  const [users, setUsers] = useState<any>([]);
  const [showChat, setShowChat] = useState({ isShow: false, user_id: null });

  useEffect(() => {
    socket.emit("online", {
      name: users.length ?? 0,
    });

    socket.on("online", (users: any) => {
      setUsers(users);
    });
    socket.on("chat", (data: any) => {
      console.log(data);
    });
  }, []);

  const onFinish = (values: any) => {
    socket.emit("chat", {
      id: showChat.user_id,
      msg: values.username,
    });
  };

  return {
    ...props,
    users,
    showChat,
    setShowChat,
    onFinish,
  };
};

export type Props = ReturnType<typeof useCart>;

export default useCart;
