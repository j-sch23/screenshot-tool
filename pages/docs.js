import EndpointDisclosure from "../components/EndpointDisclosure";
import Head from "next/head";
import Navigation from "../components/Navigation";
const endpoints = [
  {
    path: "/screenshot",
    type: "GET",
    params: [
      { param: "url", type: "string", required: "required" },
      { param: "height", type: "integer", required: "optional" },
      { param: "width", type: "integer", required: "optional" },
      { param: "fullpage", type: "boolean", required: "optional" },
      { param: "discard", type: "boolean", required: "optional" },
    ],
    example_request:
      "https://localhost:3000/api/screenshot?url=https://www.example.com&fullpage=true",
    example_response: {
      glossary: {
        title: "example glossary",
        GlossDiv: {
          title: "S",
          GlossList: {
            GlossEntry: {
              ID: "SGML",
              SortAs: 1000,
              GlossTerm: "Standard Generalized Markup Language",
              Acronym: "SGML",
              Abbrev: true,
              GlossDef: {
                para: "A meta-markup language, used to create markup languages such as DocBook.",
                GlossSeeAlso: ["GML", "XML"],
              },
              GlossSee: "markup",
            },
          },
        },
      },
    },
    short_description: "takes screenshot of a website",
    body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    path: "/screenshot",
    type: "DELETE",
    params: [
      { param: "url", type: "string", required: "required" },
      { param: "height", type: "integer", required: "optional" },
      { param: "width", type: "integer", required: "optional" },
      { param: "fullpage", type: "boolean", required: "optional" },
      { param: "discard", type: "boolean", required: "optional" },
    ],
    example_request:
      "https://localhost:3000/api/screenshot?url=https://www.example.com&fullpage=true",
    example_response: {
      glossary: {
        title: "example glossary",
        GlossDiv: {
          title: "S",
          GlossList: {
            GlossEntry: {
              ID: "SGML",
              SortAs: 1000,
              GlossTerm: "Standard Generalized Markup Language",
              Acronym: "SGML",
              Abbrev: true,
              GlossDef: {
                para: "A meta-markup language, used to create markup languages such as DocBook.",
                GlossSeeAlso: ["GML", "XML"],
              },
              GlossSee: "markup",
            },
          },
        },
      },
    },
    short_description: "removes screenshot from cloud",
    body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
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
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-6 sm:px-6 lg:px-8">
          
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
                href="mailto:contact@html.com"
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
    </div>
  );
}
