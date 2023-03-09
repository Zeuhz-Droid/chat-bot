import React from "react";
import "../Comp.css";

const CreateChatBox = () => {
  return (
    <div className="Chatbox">
      <form
        action="
http://localhost:3030/api/v1/chatbot"
        method="get"
      >
        <input
          type="number"
          placeholder="Type a number here..."
          className="chatbox-input"
        />
      </form>
    </div>
  );
};

export default CreateChatBox;
