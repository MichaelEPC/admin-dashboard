"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { changeRatingAction } from "app/actions/Company/sentCalification";
import checkImage from "app/Images/Yes_Check_Circle.svg.png";

const votesData = [
  {
    name: "Super Good",
    color: "blue",
  },
  {
    name: "Good",
    color: "cyan",
  },
  {
    name: "Medium",
    color: "green",
  },
  {
    name: "Not well",
    color: "yellow",
  },
  {
    name: "Bad",
    color: "red",
  },
];

const checkUserVote = (listVoted: object, user: object) => {
  try {
    console.log(user);

    const personVoted = listVoted.voted.filter(
      (soloRequest) => soloRequest == user.id,
    );

    if (personVoted.length == 0) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
  }
};

const VoteEmployee = ({ data, user }: { data: object; user: object }) => {
  const [model, setModel] = React.useState([]);
  const [userAlreadyVote, setUserAlreadyVote] = React.useState(false);

  useEffect(() => {
    console.log(user);

    const fetchData = async () => {
      let feedBack = data.feedBack;
      if (!feedBack) {
        return;
      }
      feedBack = JSON.parse(feedBack);

      if (checkUserVote(feedBack, user)) {
        setUserAlreadyVote(true);
      }
      setModel(feedBack.rating);
    };

    fetchData();
  }, [data]);

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center p-4">
      {!userAlreadyVote ? (
        <>
          <h3 className="mb-2 text-2xl font-semibold text-text-color underline">
            Rate your experience
          </h3>
          <div className="grid h-auto w-full grid-cols-1 gap-4">
            {model?.map((voteSelection) => {
              return (
                <button
                  key={voteSelection.name}
                  className={`rounded-lg bg-${voteSelection.color}-400 p-1 text-lg text-white`}
                  onClick={() => changeRatingAction(voteSelection.name)}
                >
                  {voteSelection.name}
                </button>
              );
            })}
          </div>
          <h4 className="mt-1 font-semibold text-text-color">
            This feed will be anonymus, you can be totally honest
          </h4>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl font-semibold text-principal-color">
              Thank you, feel free sharing your experience
            </h3>
            <div className="relative mt-6 h-auto w-32">
              <Image src={checkImage} alt="check" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VoteEmployee;
