"use client";

import { HandHeart } from "lucide-react";
import Link from "next/link";

const DonateBlock = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h1 className="text-lg lg:text-5xl">
        Help by donating to the Arizona Coalition to End Sexual and Domestic
        Violence.
      </h1>
      <Link
        href={"https://acesdv.org/"}
        target="_blank"
        className="flex space-x-1 w-fit p-2 rounded-lg bg-amber-300 hover:bg-amber-400">
        <HandHeart />
        <span>Donate</span>
      </Link>
    </div>
  );
};

export default DonateBlock;
