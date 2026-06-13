import React from "react";

function User({ user }) {
  const {
    avatar_url,
    name,
    public_repos,
    followers,
    following,
    created_at,
    login,
  } = user;

  console.log(JSON.stringify(user));

  const createdAt = new Date(created_at);

  return (
    <div className="user-data text-white flex flex-col gap-5 items-center justify-center mt-10 font-mono">
      <div className="user-image text-white w-24 h-24 rounded-full">
        <img src={avatar_url} className="w-24 h-24 rounded-full" />
      </div>
      <div className="user-name">Name: {name || login}</div>
      <div className="user-repos">Public Repos: {public_repos}</div>
      <div className="user-followers">Followers: {followers}</div>
      <div className="user-following">Following: {following}</div>
      <div className="user-joined leading-7">
        Joined On: <br />
        {createdAt.getDate()}{" "}
        {createdAt.toLocaleString("default", { month: "short" })}{" "}
        {createdAt.getFullYear()}
      </div>
    </div>
  );
}
export default User;
