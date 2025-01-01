'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Comments = ({ initialComments = [] }: { initialComments?: string[] }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>(initialComments);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
      <div className="flex flex-col gap-4">
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="p-3 border border-gray-300 rounded-md"
        />
        <Button onClick={handleCommentSubmit} className="self-start bg-blue-600 text-white">
          Post Comment
        </Button>
      </div>

      {/* Display Comments */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Comments:</h3>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-md">
                <p className="text-gray-800">{comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
