import Head from "next/head";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import InputURL from "../components/InputWithURL";
import Toggle from "../components/Toggle";
import BasicInput from "../components/BasicInput";
import Radio from "../components/Radio";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Features from "../components/Features";
import CTA from "../components/CTA";
export default function Home() {
  const [url, setUrl] = useState("www.example.com");
  const [screenshot, setScreenshot] = useState(null);
  const [height, setHeight] = useState(1080);
  const [width, setWidth] = useState(1920);
  const [query, setQuery] = useState(
    `https://screenshotify.vercel.app/api/screenshot?url=${url}&width=1920&height=1080`
  );
  const [device, setDevice] = useState({
    id: "iphone6",
    name: "IPhone 6, 6s, 7, 8",
    width: 414,
    height: 736,
  });
  const [upload, setUpload] = useState(false);
  const [json, setJson] = useState(false);
  const [fullPage, setFullPage] = useState(false);
  const [fileType, setFileType] = useState({ id: 1, name: "png" });
  const [deviceToggle, setDeviceToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoad] = useState(false);
  const devices = [
    { id: "iphone6", name: "IPhone 6, 6s, 7, 8", width: 414, height: 736 },
    { id: "iphone11", name: "IPhone 11", width: 1920, height: 1080 },
    { id: "googlepixel", name: "Google Pixel", width: 411, height: 731 },
    {
      id: "iphonexsmax",
      name: "IPhone 11 Pro Max, Xs Max",
      width: 1920,
      height: 1080,
    },
    {
      id: "macbookpro15",
      name: "MacBook Pro 15-inch",
      width: 1920,
      height: 1080,
    },
  ];
  const fileTypes = [
    { id: 1, name: "png" },
    { id: 2, name: "jpeg" },
  ];

  useEffect(() => {
    assembleQuery();
  }, [
    height,
    width,
    deviceToggle,
    device,
    url,
    upload,
    json,
    fullPage,
    fileType,
  ]);

  const updateOptions = (option, bool) => {
    switch (option) {
      case "upload":
        setUpload(bool);
        break;
      case "json":
        setJson(bool);
        break;
      case "full-page":
        setFullPage(bool);
        break;
      default:
        break;
    }
  };

  const getImg = async () => {
    setLoad(true);
    await fetch(query)
      .then(async (res) => {
        if (res.ok) {
          setScreenshot(res.url);
        } else {
          let resjson = await res.json();
          console.log(resjson);
          throw new Error(
            res.status + " " + res.statusText
          );
        }
      })
      .catch((e) => alert(e));
    setLoad(false);
  };

  const assembleQuery = () => {
    let newQuery = `https://screenshotify.vercel.app/api/screenshot?url=https://${url}`;
    if (deviceToggle) {
      newQuery += `&device=${device.id}`;
    }
    if (!deviceToggle) {
      newQuery += `&width=${width}&height=${height}`;
    }
    if (fileType.name != "png") {
      newQuery += `&filetype=${fileType.name}`;
    }
    if (json) {
      newQuery += "&json=true";
    }
    if (upload) {
      newQuery += "&upload=true";
    }
    if (fullPage) {
      newQuery += "&fullpage=true";
    }

    setQuery(newQuery);
  };

  return (
    <div className="flex flex-col  min-h-screen  bg-gray-50">
      <Navigation active="Home"/>
      <Head>
        <title>Screenshotify | Website screenshot API</title>   
        <link rel="icon" href="favicon.ico" />
        <meta name="google-site-verification" content="sou_jHkVU7WYk11BY4AlQyeo4sW_u0pYS3qVnMKBEeA" />
        <meta name="description" content="A free API for taking programmatic screenshots of websites in seconds. Support for JPG and PNG formats and optional cloud hosting." key="desc" />
        <meta property="og:title" content="Screenshotify | Website screenshot API" />
        <meta
          property="og:description"
          content="A free API for taking programmatic screenshots of websites in seconds. Support for JPG and PNG formats and optional cloud hosting."
        />
        <meta
          property="og:image"
          content="https://vercel.com/ddc90917-1154-49d1-a259-e8f4c18bcc47"
        />
      </Head>
      <CTA/>
      
     
      <div id="demo" className="max-w-6xl mx-auto flex flex-col items-center  py-16 sm:py-24 lg:py-32  ">
      <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">LIVE DEMO</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Build your API query
          </p>
      <div  className=" max-w-7xl w-auto  bg-gray-100 p-5 border rounded-lg transition-transform">

        <InputURL label={"URL"} update={setUrl} />

        {deviceToggle ? null : (
          <div className="my-2">
            <h1 className="text-sm font-medium text-gray-700">Browser size</h1>
            <div className="flex space-x-2 mt-1 ">
              <BasicInput update={setWidth} label="Width" placeholder={width} />
              <BasicInput
                update={setHeight}
                label="Height"
                placeholder={height}
              />
            </div>
          </div>
        )}
        {deviceToggle ? (
          <Dropdown
            label="Device"
            update={setDevice}
            data={device}
            options={devices}
          />
        ) : null}
        <Toggle
          enabled={deviceToggle}
          setEnabled={setDeviceToggle}
          head="Use device"
          description="Use a device for viewport size instead of specifying a height and width."
        />
        <button
          onClick={() => setOpen(!open)}
          className=" mt-3 inline-flex items-center px-2.5 py-2 border border-transparent text-sm font-medium tracking-wide rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {open ? "Hide advanced options" : "Show advanced options"}
        </button>
        {open ? (
          <div>
            <Dropdown
              label="File type"
              update={setFileType}
              data={fileType}
              options={fileTypes}
            />
            <Radio
              upload={upload}
              json={json}
              fullPage={fullPage}
              update={updateOptions}
            />
          </div>
        ) : null}

        <label
          htmlFor="about"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 "
        >
          Your API query
        </label>
        <div className="mt-1 ">
          <textarea
            value={query}
            readOnly
            id="about"
            name="about"
            rows={3}
            className=" shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
          />
        </div>

        <div className="justify-between flex mt-4 space-x-2">
          <button
            onClick={() => {
              navigator.clipboard.writeText(query);
            }}
            type="button"
            className="inline-flex items-center px-2.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Copy URL to Clipboard
          </button>
          <button
            onClick={
              screenshot
                ? () => {
                    window.open(screenshot);
                    setScreenshot(null);
                  }
                : () => {
                    getImg();
                  }
            }
            className=" inline-flex items-center px-2.5 py-2 border border-transparent text-sm font-medium tracking-wide rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
            {loading
              ? "Processing"
              : screenshot
              ? "Open Screenshot"
              : "Take Screenshot"}
          </button>
        </div>
      </div>
      
      </div>
      <Features/>
      <Footer/>
    </div>
  );
}
