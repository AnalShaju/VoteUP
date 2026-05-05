import { useState } from "react";
function IdeaCard(props) {
  const [votes, setVotes] = useState(props.votes);
  const [userVote, setUserVotes] = useState(null);
  function handUpVote() {
    if (userVote === "up") {
      return;
    } else {
      setVotes(votes + 1);
      setUserVotes("up");
    }
  }
  function handDownVote() {
    if (userVote === "down") {
      return;
    } else {
      setVotes(votes - 1);
      setUserVotes("down");
    }
  }
  return (
    <>
      <div className="bg-white rounded-xl hover:shadow-lg p-2 flex items-center justify-between gap-4">
        <div className="bg-purple-100 h-8 w-8 rounded-md flex item-center justify-center ">
          <p className="text-purple-600 font-semibold text-sm pt-1">
            {props.number}
          </p>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <h2 className="text-lg font-bold text-gray-900">{props.title}</h2>
          <p className="text-base text-gray-500">{props.desc}</p>
          <span className="text-sm text-gray-400">{props.author}</span>
        </div>
        <div className="flex flex-col item-center gap-1">
          <button
            onClick={handUpVote}
            className={`text-xl ${userVote === "up" ? "text-green-500" : "text-gray-400 hover:text-green-500"}`}
          >
            ▲
          </button>
          <span className="font-bold text-gray-800">{votes}</span>
          <button
            onClick={handDownVote}
            className={`text-xl ${userVote === "down" ? "text-red-500" : "text-gray-400 hover:text-red-500"} `}
          >
            ▼
          </button>
        </div>
      </div>
    </>
  );
}

export default IdeaCard;
