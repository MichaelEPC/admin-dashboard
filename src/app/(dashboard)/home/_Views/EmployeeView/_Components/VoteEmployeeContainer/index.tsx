"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { changeRatingAction } from "app/actions/Company/sentCalification";
import checkImage from "app/Images/Yes_Check_Circle.svg.png";
import style from "./style.module.css";

const votesData = [
  {
    name: "Super Good",
  },
  {
    name: "Good",
  },
  {
    name: "Medium",
  },
  {
    name: "Not well",
  },
  {
    name: "Bad",
  },
];

const checkUserVote = (listVoted: object, user: object) => {
  try {
    // @ts-expect-error
    const personVoted = listVoted.voted.filter(
      // @ts-expect-error
      (soloRequest: any) => soloRequest == user.id,
    );

    if (personVoted.length == 0) {
      return false;
    }

    return true;
  } catch (error) {}
};

const VoteEmployee = ({ data, user }: { data: object; user: object }) => {
  const [model, setModel] = React.useState([]);
  const [userAlreadyVote, setUserAlreadyVote] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // @ts-expect-error
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
    <div
      className={`flex h-auto w-full flex-col items-center justify-center p-5 ${style.ExperienceContainer}`}
    >
      {!userAlreadyVote ? (
        <>
          <h3 className="mb-2 mt-1 text-2xl font-semibold text-principal-color">
            Rate your experience
          </h3>
          <div className="mb-1 grid h-auto w-full grid-cols-1 gap-4">
            {model?.map((voteSelection) => {
              return (
                <button
                  // @ts-expect-error
                  key={voteSelection.name}
                  className={`rounded-lg border-2 border-ligh-gray bg-white p-1 text-lg text-black shadow-md transition-all duration-200 hover:bg-principal-color hover:font-semibold hover:text-white`}
                  // @ts-expect-error
                  onClick={() => changeRatingAction(voteSelection.name)}
                >
                  {/* @ts-ignore */}
                  {voteSelection.name}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl font-semibold text-principal-color">
              Thank you it will help to improve your experience
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
