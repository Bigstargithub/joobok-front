"use client";

import SquareItemComponent from "@/app/components/joobok-square/square_item";

export default function UserJoobokSquarePage() {
  return (
    <main>
      <h3 className="text-center text-4xl font-semibold">주복광장</h3>
      <div id="message-list" className="mt-10">
        <SquareItemComponent />
      </div>
    </main>
  );
}
