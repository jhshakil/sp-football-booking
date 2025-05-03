import Image from "next/image";
import { Button } from "../ui/button";
import CommentCard from "./CommentCard";
import React from "react";
import { Input } from "../ui/input";

const allComments = [
  {
    name: "Alex Mercer",
    text: "Looking forward to the game! What’s the final player count?",
    avatar: "",
    avatarFallback: "AM",
    time: "14 min",
    reply: [
      {
        name: "Rifat Khan",
        text: "missing few players",
        avatar: "",
        avatarFallback: "RK",
        time: "14 min",
      },
      {
        name: "Rifat Khan",
        text: "got any friends?",
        avatar: "",
        avatarFallback: "RK",
        time: "14 min",
      },
    ],
  },
  {
    name: "Alex Mercer",
    text: "Looking forward to the game! What’s the final player count?",
    avatar: "",
    avatarFallback: "AM",
    time: "14 min",
    reply: [
      {
        name: "Rifat Khan",
        text: "missing few players",
        avatar: "",
        avatarFallback: "RK",
        time: "14 min",
      },
    ],
  },
  {
    name: "Alex Mercer",
    text: "Looking forward to the game! What’s the final player count?",
    avatar: "",
    avatarFallback: "AM",
    time: "14 min",
    reply: [
      {
        name: "Rifat Khan",
        text: "got any friends?",
        avatar: "",
        avatarFallback: "RK",
        time: "14 min",
      },
    ],
  },
];

const EventComment = () => {
  return (
    <div className="mt-5 p-5 bg-white rounded-[30px] flex flex-col gap-6">
      {allComments?.map((comment, i) => (
        <div key={`main-comment-${comment.name}-${i}`} className="mb-10">
          <CommentCard
            name={comment.name}
            text={comment.text}
            avatar={comment.avatar}
            avatarFallback={comment.avatarFallback}
            time={comment.time}
          />
          <div className="mt-4">
            <div>
              <Button
                variant={"link"}
                size={"link"}
                className="no-underline gap-2"
              >
                <Image
                  width={26}
                  height={26}
                  src={"/images/comment-reply.png"}
                  alt="reply icon"
                />
                <p className="text-base text-[#808080] font-medium ">Reply</p>
              </Button>
            </div>
            {comment?.reply?.length ? (
              <div className="relative mt-6 ps-[28px] flex flex-col gap-3 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[1.2px] before:bg-[repeating-linear-gradient(to_bottom,theme(colors.border.DEFAULT)_0,theme(colors.border.DEFAULT)_8px,transparent_8px,transparent_16px)] content-['']">
                {comment.reply.map((reply, j) => (
                  <React.Fragment key={`comment-reply-${reply.name}-${i}-${j}`}>
                    <CommentCard
                      reply
                      name={reply.name}
                      text={reply.text}
                      avatar={reply.avatar}
                      avatarFallback={reply.avatarFallback}
                      time={reply.time}
                    />
                  </React.Fragment>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
      <div className="px-1 pb-1">
        <Input
          placeholder="Write a comment"
          className="h-[53px] placeholder:text-[#808080] placeholder:text-lg placeholder:font-medium text-[#808080] text-lg font-medium border-[#C0C0C0] px-6"
        />
      </div>
    </div>
  );
};

export default EventComment;
