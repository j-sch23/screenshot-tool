import Head from "next/head";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import Toggle from "../components/Toggle";
export default function Home() {
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState("www.example.com");
  const getImg = async () => {
    await fetch(`/api/screenshot?url=${url}`)
      .then((res) => res.blob())
      .then((data) => URL.createObjectURL(data))
      .then((img) => setImg(img));
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>screenshot tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="w-1/4 mx-auto">
      <div className="flex   items-end">
        <Input label={"URL"} update={setUrl} />
        <div>
        <button
          onClick={() => {
            getImg();
          }}
          className="mx-2 inline-flex items-center px-2.5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          SUBMIT
        </button>
        <a
          download
          href={img}
          className={
            "inline-flex items-center  px-2.5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
            (img === null ? "disabled" : null)
          }
        >
          DOWNLOAD
        </a>
        </div>
      </div>
      <Dropdown/>
      <Toggle/>
      <img className="mt-2 rounded-lg shadow-sm" src={img} />
      </div>
    </div>
  );
}
