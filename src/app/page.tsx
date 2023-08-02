import Image from "next/image";
// import { Inter } from "next/font/google";
import Start from "./components/Organisms/Top/Start";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center text-xl">
      {/* {session ? <div>ログイン済</div> : <div>未ログイン</div>} */}
      <Start></Start>
    </div>
  );
}
