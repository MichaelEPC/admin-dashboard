import { userAlreadyVoteAction } from "app/actions/Company/userAlreadyVoteAction";

export const getUserVote = async () => {
  const res = await userAlreadyVoteAction();
  return res;
};
