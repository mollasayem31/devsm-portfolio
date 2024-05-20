"use client";

import {
  FileDown,
  MoonStar,
  SunMoon,
  Home,
  User,
  Layers3,
  FolderGit2,
  Rss,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBarCom() {
  const [dark, setDark] = useState(false);
  return (
    <div className="bg-white py-4 rounded-lg flex justify-evenly items-center shadow-lg">
      <div className="text-2xl font-bold">Developer Sayem</div>
      <div className="flex justify-center items-center gap-2">
        <Link href="" className="btn btn-ghost text-md">
          <span className="font-extra">
            <Home />
          </span>
          Home
        </Link>
        <Link href="" className="btn btn-ghost">
          <span>
            <User />
          </span>
          About
        </Link>
        <Link href="" className="btn btn-ghost">
          <span>
            <Layers3 />
          </span>
          Services
        </Link>
        <Link href="" className="btn btn-ghost">
          <span>
            <FolderGit2 />
          </span>
          projects
        </Link>
        <Link href="" className="btn btn-ghost">
          <span>
            <Rss />
          </span>
          Blogs
        </Link>
        <Link href="" className="btn btn-ghost">
          <span>
            <Send />
          </span>
          Contact
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={() => setDark(!dark)}
          className=" btn btn-ghost text-4xl"
        >
          {dark ? (
            <span className="font-bold">
              <MoonStar />
            </span>
          ) : (
            <span className="font-bold">
              <SunMoon />
            </span>
          )}
        </button>
        <button className="btn btn-primary">
          <span>
            <FileDown />
          </span>
          Get Resume
        </button>
      </div>
    </div>
  );
}
