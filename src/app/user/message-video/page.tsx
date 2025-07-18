"use client";

import { useEffect, useState } from "react";
import MessageItemComponent from "../../components/messages/message_item";

type MessageType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  video_link: string;
};

export default function MessageVideoPage() {
  const [messageList, setMessageList] = useState<MessageType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermon`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) setMessageList(jsonData.sermonList);
    });
  }, []);

  return (
    <main>
      <h3 className="text-center lg:text-4xl text-3xl font-semibold">
        설교 영상
      </h3>
      <div id="message-list lg:mt-10 mt-5">
        {messageList.map((message) => (
          <MessageItemComponent
            key={`message_${message.id}`}
            image={message.thumbnail}
            title={message.title}
            desc={message.description}
            link={message.video_link}
          />
        ))}
      </div>
    </main>
  );
}
