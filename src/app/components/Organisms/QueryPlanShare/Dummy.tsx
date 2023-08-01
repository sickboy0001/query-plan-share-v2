import React, { useEffect, useState } from "react";
import PrismJsCode from "@/app/components/Molecules/PrismJsCode";

import { getFileContents } from "@/lib/Papaparse";
import { getFormattedQuery } from "@/lib/FormattedQuery";
import QueryPlanHtmlDisp from "@/app/components/Molecules/QueryPlanHtmlDisp";

import { useLocation } from "react-router-dom";

type Props = { userId: string };

export default function Dummy(props: Props) {
  // https://hackernoon.com/using-prismjs-as-a-syntax-highlighter-in-react
  const { userId } = props;
  const [openTab, setOpenTab] = useState(1);
  const [sqlplan, setSqlplan] = useState("");
  const [querys, setQuerys] = useState<string[]>([]);

  //   console.log(window.location.search);
  //   const queryStringSearch = window.location.search;
  //   <div>hoge: {queryStringSearch.get('filename')}</div>
  //   console.log(queryStringSearch.get("filename"));
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.has("filename")); //=> true
    console.log(searchParams.get("filename"));

    const filename = searchParams.has("filename")
      ? searchParams.get("filename")
      : "clustered index scan";

    const filePath = `/xml/dummy/queryplanxml/${filename}.sqlplan`;
    const fetchData = async () => {
      console.log("fetchData:start");
      const newtext = await getFileContents(filePath); // `await` を使って非同期処理の完了を待つ
      if (newtext && newtext != undefined) {
        setSqlplan(newtext);
        console.log("fetchData:end");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(sqlplan, "application/xml");

    const stmsimples = dom.getElementsByTagName("StmtSimple");
    console.log("StmtSimple:");
    console.log(stmsimples);
    setQuerys([]);

    if (stmsimples.length >= 0) {
      for (var i = 0; i < stmsimples.length; i++) {
        // console.log("StatementText:");
        const stmsimple = stmsimples[i];
        // console.log(stmsimple);
        const query = stmsimple.getAttribute("StatementText");
        const formatedquery = getFormattedQuery(query);
        console.log(formatedquery);
        if (formatedquery) {
          setQuerys((prequery) => {
            return [...prequery, formatedquery];
          });
        }
        // setQuerys(["select * from tenmf", "select * from kanmf"]);
        // setQuerys((prequerys) => [...prequerys, formatedquery]);
      }
    }
    // const dom3 = dom2.getElementsByClassName("StatementText");
  }, [sqlplan]);

  return (
    <div className="mb-2 w-5/6 mx-auto  ">
      <div>Dummy</div>
      {/* <h2> Code Syntax Block {lang}</h2> */}

      <QueryPlanHtmlDisp sqlplan={sqlplan} />
      <div className="Code">
        {querys &&
          querys.map((query, index) => (
            <PrismJsCode key={index} code={query} language="sql" />
          ))}
        <PrismJsCode key={"sqlplanxml_test"} code={sqlplan} language="xml" />
      </div>

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
    </div>
  );
}
