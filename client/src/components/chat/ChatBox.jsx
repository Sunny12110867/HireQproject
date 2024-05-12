import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import moment from "moment";
import {
  ArrowLongLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { toast } from "react-toastify";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const {
    currentChat,
    updateCurrentChat,
    messages,
    isMessagesLoading,
    sendTextMessage,
  } = useContext(ChatContext);
  const { recipientUser, error: recipientUserFetchError } =
    useFetchRecipientUser(currentChat, user);
  const [textMessage, setTextMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (!recipientUser && recipientUserFetchError?.error) {
      toast.error(recipientUserFetchError.message);
    }
  }, [recipientUser, recipientUserFetchError]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <div
      className={clsx(
        "flex h-[calc(100vh-5.25rem)] w-full flex-col gap-4 overflow-y-auto bg-white-900/50 sm:h-[80vh] sm:basis-3/4",
        currentChat ? "" : "hidden sm:flex",
      )}
    >
      <div className="flex flex-none items-center justify-between bg-white-700 p-1">
        <button
          className="flex-none sm:hidden"
          onClick={() => {
            updateCurrentChat(null);
          }}
        >
          <ArrowLongLeftIcon className="h-5 w-5 text-white" />
        </button>
        <strong className="flex-1 p-2.5 text-center leading-4">
          {recipientUser?.name}
        </strong>
      </div>
      <div className="flex grow flex-col gap-3 overflow-y-auto px-3 py-0">
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className={clsx(
                "flex max-w-[50%] grow-0 flex-col rounded-sm p-3",
                message?.senderId === user?._id
                  ? "self-end bg-white-700"
                  : "self-start bg-white-800",
              )}
              ref={scroll}
            >
              <span>{message.text}</span>
              <span className="content-end text-[0.75rem] font-normal">
                {moment(message.createdAt).calendar()}
              </span>
            </div>
          ))}
      </div>
      <div className="flex w-full items-center justify-between gap-2 bg-white-700 p-3">
        <input
          type="text"
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() =>
            sendTextMessage(textMessage, user, currentChat._id, setTextMessage)
          }
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
