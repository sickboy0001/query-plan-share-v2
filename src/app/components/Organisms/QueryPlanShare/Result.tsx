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

  const JSCode = `const App = props => {
    return (
      <div>
        <h1> Prism JS </h1>
        <div>Awesome Syntax Highlighter</div>
      </div>
    );
  };
  `.trim();

  const xmlDoc = `
  <ShowPlanXML xmlns="http://schemas.microsoft.com/sqlserver/2004/07/showplan" Version="1.1" Build="10.50.1600.1">
  <BatchSequence>
    <Batch>
      <Statements>
        <StmtSimple StatementText="DELETE FROM People" StatementId="1" StatementCompId="1" StatementType="DELETE" StatementSubTreeCost="0.0132996" StatementEstRows="8" StatementOptmLevel="TRIVIAL" QueryHash="0xB6CAC98B40A76DA1" QueryPlanHash="0x0FFE1744DF71592F">
          <StatementSetOptions QUOTED_IDENTIFIER="true" ARITHABORT="false" CONCAT_NULL_YIELDS_NULL="true" ANSI_NULLS="true" ANSI_PADDING="true" ANSI_WARNINGS="true" NUMERIC_ROUNDABORT="false"/>
          <QueryPlan DegreeOfParallelism="0" CachedPlanSize="8" CompileTime="37" CompileCPU="13" CompileMemory="64">
            <RelOp NodeId="0" PhysicalOp="Clustered Index Delete" LogicalOp="Delete" EstimateRows="8" EstimateIO="0.01" EstimateCPU="8e-006" AvgRowSize="9" EstimatedTotalSubtreeCost="0.0132996" Parallel="0" EstimateRebinds="0" EstimateRewinds="0">
              <OutputList/>
              <RunTimeInformation>
                <RunTimeCountersPerThread Thread="0" ActualRows="8" ActualEndOfScans="1" ActualExecutions="1"/>
              </RunTimeInformation>
              <Update DMLRequestSort="0">
                <Object Database="[StackOverflow]" Schema="[dbo]" Table="[People]" Index="[PK_People_id]" IndexKind="Clustered"/>
                <RelOp NodeId="1" PhysicalOp="Top" LogicalOp="Top" EstimateRows="8" EstimateIO="0" EstimateCPU="8e-007" AvgRowSize="11" EstimatedTotalSubtreeCost="0.0032916" Parallel="0" EstimateRebinds="0" EstimateRewinds="0">
                  <OutputList>
                    <ColumnReference Database="[StackOverflow]" Schema="[dbo]" Table="[People]" Column="id"/>
                  </OutputList>
                  <RunTimeInformation>
                    <RunTimeCountersPerThread Thread="0" ActualRows="8" ActualEndOfScans="1" ActualExecutions="1"/>
                  </RunTimeInformation>
                  <Top RowCount="1" IsPercent="0" WithTies="0">
                    <TopExpression>
                      <ScalarOperator ScalarString="(0)">
                        <Const ConstValue="(0)"/>
                      </ScalarOperator>
                    </TopExpression>
                    <RelOp NodeId="2" PhysicalOp="Clustered Index Scan" LogicalOp="Clustered Index Scan" EstimateRows="8" EstimateIO="0.003125" EstimateCPU="0.0001658" AvgRowSize="11" EstimatedTotalSubtreeCost="0.0032908" TableCardinality="8" Parallel="0" EstimateRebinds="0" EstimateRewinds="0">
                      <OutputList>
                        <ColumnReference Database="[StackOverflow]" Schema="[dbo]" Table="[People]" Column="id"/>
                      </OutputList>
                      <RunTimeInformation>
                        <RunTimeCountersPerThread Thread="0" ActualRows="8" ActualEndOfScans="1" ActualExecutions="1"/>
                      </RunTimeInformation>
                      <IndexScan Ordered="1" ForcedIndex="0" NoExpandHint="0">
                        <DefinedValues>
                          <DefinedValue>
                            <ColumnReference Database="[StackOverflow]" Schema="[dbo]" Table="[People]" Column="id"/>
                          </DefinedValue>
                        </DefinedValues>
                        <Object Database="[StackOverflow]" Schema="[dbo]" Table="[People]" Index="[PK_People_id]" IndexKind="Clustered"/>
                      </IndexScan>
                    </RelOp>
                  </Top>
                </RelOp>
              </Update>
            </RelOp>
          </QueryPlan>
        </StmtSimple>
      </Statements>
    </Batch>
  </BatchSequence>
</ShowPlanXML>
  `.trim();
  const htmlCode = `
      <div>
        <h1> PrismJS Tutorial </h1>
        <p>
        Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
        </p>
      </div>
  `;
  const md = `
  <div>
  <h1> PrismJS Tutorial </h1>
  <p>
  Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
  </p>
</div>
`.trim();
  const sql = `
  select * 
  from sampletale
  where code ='123123123123'
  `.trim();

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
      <div className="Code">
        {/* <h2> Code Syntax Block {lang}</h2> */}
        <PrismJsCode code={JSCode} language="javascript" />
        <PrismJsCode code={htmlCode} language="html" />
        <PrismJsCode code={sql} language="sql" />

        <PrismJsCode code={xmlDoc} language="xml" />
      </div>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
      </div>
    </div>
  );
}
