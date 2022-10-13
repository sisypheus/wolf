import type { NextPage } from "next";
import { appWindow } from "@tauri-apps/api/window";
import { app } from "@tauri-apps/api";

const Home: NextPage = () => {
  const timeLeft = new Date("10");

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <p>Wolf</p>
        {timeLeft.getMinutes()}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-player-play"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 4v16l13 -8z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Home;
