import EndpointList from "../components/EndpointList";

const getEndpoints = [
  {
    path: "/screenshot",
    short_description: "takes screenshot of a website",
    body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
const putEndpoints= [
  {
    path: "/screenshot",
    short_description: "takes screenshot of a website",
    body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function Example() {
  return (
    <div className="flex flex-col  min-h-screen py-2 bg-gray-50">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              API Endpoints
            </h2>
            <EndpointList type="GET" endpoints={getEndpoints} />
            <EndpointList type="PUT" endpoints={putEndpoints} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
