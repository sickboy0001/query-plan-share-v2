"use client";

import React, { useEffect, useState } from "react";
import PrismJsCode from "@/app/components/Molecules/PrismJsCode";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { userId: string };

export default function Result(props: Props) {
  // https://hackernoon.com/using-prismjs-as-a-syntax-highlighter-in-react
  const { userId } = props;
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="mb-2 w-5/6 mx-auto  ">
      <div className="justify-center ">
        <div className="flex flex-col ">
          <ul className="flex ">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? " bg-sky-600 text-gray-200" : "bg-white "
                } inline-block px-4 py-2 text-gray-600 rounded shadow`}
              >
                Dialog
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-sky-600 text-white" : "bg-white "
                } inline-block px-4 py-2 text-gray-600  rounded shadow`}
              >
                Url
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(3)}
                className={` ${
                  openTab === 3 ? "bg-sky-600 text-white" : "bg-white "
                } inline-block px-4 py-2 text-gray-600  rounded shadow`}
              >
                raw
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <img src="/images/dummy.png" />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              URL:https/xxxxxx/xxxx/xxxxxx
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                copy
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
                Reset
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded">
                Delete
              </button>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}></div>
          </div>
        </div>
      </div>
      <div className="Code"></div>
      <div>
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown> */}
      </div>
    </div>
  );
}
