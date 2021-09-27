import EndpointDisclosure from "../components/EndpointDisclosure";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const endpoints = [
  {
    path: "/screenshot",
    type: "GET",
    params: [
      { param: "url", type: "string", required: "required", description: "URL to website you want to screenshot. URL must be prepended with 'https://'." },
      { param: "filetype", type: "string", required: "optional", description: "png/jpeg. Defaults to png." },
      { param: "height", type: "integer", required: "optional", description: "Height in pixels." },
      { param: "width", type: "integer", required: "optional", description: "Width in pixels." },
      { param: "fullpage", type: "boolean", required: "optional", description: "Takes sreenshot of entire scrollable page." },
      { param: "upload", type: "boolean", required: "optional", description: "Uploads screenshot to cloud. Defaults to true when json reponse is enabled." },
      { param: "json", type: "boolean", required: "optional", description: "Returns json response." },
    ],
    example_request:
      "https://screenshotify.vercel.app/api?url=https://www.example.com&width=1920&height=1080&json=true",
    example_response: {
      query: {
      url: "https://www.example.com",
      width: "1920",
      height: "1080",
      json: "true"
      },
      timestamp: "2021-09-27T02:12:40Z",
      bytes: 22687,
      format: "png",
      url: "https://res.cloudinary.com/dxgbphyhg/image/upload/v1632708760/aegwap2dx91xq9pb50sd.png"
      },
    short_description: "takes screenshot of a website",
    body: "Capture images of websites as jpeg/png formated images.",
  },
  

  // More endpoints...
];

export default function Docs() {
  return (
    <div className="flex flex-col  min-h-screen  bg-gray-50">
      <Head>
        <title>Screenshotify | Docs</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="bg-gray-50">
       <Navigation active="Docs"/>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-6 sm:px-6 lg:px-8 min-h-screen">
          
          <div className="max-w-7xl mx-auto">
            <div className=" flex flex-col space-y-3  items-start mb-5 border-b border-gray-300">
              <h2 className=" text-3xl text-gray-900 sm:text-4xl">
                Screenshot API
              </h2>

              <span className="bg-gray-600 text-gray-100 font-bold px-2 py-1 rounded text-center">
                1.0.0
              </span>

              <code className="text-sm">
                Base URL: screenshotify.vercel.app/api
              </code>
              <p>An API for taking screenshots of websites.</p>
              <a
                href="mailto:developer@jasch.dev"
                target="_blank"
                rel="noopener"
                className=" text-indigo-600 pb-2"
              >
                Contact developer
              </a>
            </div>
            <h2 className=" text-2xl  text-gray-900 ">Endpoints</h2>
            {endpoints.map((endpoint) => {
              return (
                <EndpointDisclosure
                  type={endpoint.type}
                  path={endpoint.path}
                  shortDescription={endpoint.short_description}
                  body={endpoint.body}
                  exampleResponse={endpoint.example_response}
                  exampleRequest={endpoint.example_request}
                  params={endpoint.params}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
