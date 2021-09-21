import EndpointDisclosure from "../components/EndpointDisclosure";
import Head from "next/head";
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
    example_request: "https://localhost:3000/api/screenshot?url=https://www.example.com&fullpage=true",
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
    example_request: "https://localhost:3000/api/screenshot?url=https://www.example.com&fullpage=true",
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
    <div className="flex flex-col  min-h-screen py-2 bg-gray-50">
      <Head>
        <title>screenshot tool | docs</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              API Endpoints
            </h2>
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
