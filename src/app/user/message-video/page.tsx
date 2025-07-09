import MessageItemComponent from "../../components/messages/message_item";

export default function MessageVideoPage() {
  return (
    <main>
      <h3 className="text-center text-4xl font-semibold">설교 영상</h3>
      <div id="message-list mt-10">
        <MessageItemComponent
          image="/message_thumb.jpg"
          title=""
          desc=""
          link="https://www.youtube.com/live/fh1LzlK8b5o?si=MFvz0y2LuGDIm4rm"
        />
      </div>
    </main>
  );
}
