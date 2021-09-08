import Head from "next/head";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import InputURL from "../components/InputURL";
import Toggle from "../components/Toggle";
import BasicInput from "../components/BasicInput";
import { PlusIcon as PlusIconSolid } from "@heroicons/react/solid";
export default function Home() {
  const [img, setImg] = useState("default_img.png");
  const [url, setUrl] = useState("www.example.com");
  const [loading, setLoad] = useState(false);
  const [deviceCount, setDeviceCount] = useState(1);
  const [deviceList, setDeviceList] = useState([]);
  const [deviceToggle, setDeviceToggle] = useState(false);
  const getImg = async () => {
    setLoad(true);
    await fetch(`/api/screenshot?url=${url}`)
      .then((res) => res.blob())
      .then((data) => URL.createObjectURL(data))
      .then((img) => setImg(img));
    setLoad(false);
  };
  const addDevice = () => {
    const arr = deviceList.slice();
    arr.push({
      id: 1,
      device: "IPhone 6, 6s, 7, 8",
      width: 1920,
      height: 1080,
    });
    setDeviceList(arr);
  };
  const updateDeviceArr = (e, index) => {
    const arr = deviceList.slice();
    console.log(arr);
    console.log(index);
    arr[index] = e;
    setDeviceList(arr);
    console.log(e);
    console.log(deviceList);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>screenshot tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl mb-6 font-semibold text-gray-800">Try it out live</h1>
      <div className="w-1/4 mx-auto bg-gray-100 p-6 border rounded-lg">
        <h1 className="text-xl mb-4 font-medium text-gray-700">Build your API query</h1>
      
          <InputURL label={"URL"} update={setUrl} />

          
      
        {deviceToggle ? null : (
          <div className="my-4">
            <h1 className="text-sm font-medium text-gray-700">Browser size</h1>
            <div className="flex space-x-2  ">
              <BasicInput label="Width" placeholder="1920" />
              <BasicInput label="Height" placeholder="1080" />
            </div>
          </div>
        )}
        {deviceToggle ? <Dropdown label="Device" /> : null}
        <Toggle
          enabled={deviceToggle}
          setEnabled={setDeviceToggle}
          head="Use device"
          description="Use a specified device as a viewport instead of setting a height and width."
        />

        <label
          htmlFor="about"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Your API query
        </label>
        <div className="mt-1 ">
          <textarea
            readOnly
            id="about"
            name="about"
            rows={3}
            className=" shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={""}
          />
        </div>

        <div className="justify-between flex mt-4">
        <button
        type="button"
        className="inline-flex items-center px-2.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Copy URL to Clipboard
      </button>
            <button
              onClick={() => {
                getImg();
              }}
              className=" inline-flex items-center px-2.5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Processing" : "Take Screenshot"}
            </button>
          </div>
        
      </div>
    </div>
  );
}
