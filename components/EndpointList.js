import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import JSONPretty from 'react-json-pretty';
import ParamsTable from './ParamsTable';
var JSONPrettyAcai = require('react-json-pretty/dist/acai');
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
var JSONPretty1337 = require('react-json-pretty/dist/1337');
var JSONPrettyAcai = require('react-json-pretty/dist/acai');
var JSONPrettyAdv = require('react-json-pretty/dist/adventure_time');
const themeTest = {
  main: 'line-height:1.3;color:#D1D5DB;overflow:auto;',
  error: 'line-height:1.3;color:#66d9ef;overflow:auto;',
  key: 'color:#60A5FA;',
  string: 'color:#E5E7EB;',
  value: 'color:#a6e22e;',
  boolean: 'color:#ac81fe;',
}

const example = 
  {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": 1000,
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": true,
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function EndpointList (props) {
    return (
        <dl className="mt-6">
          {props.endpoints.map((endpoint) => (
            <Disclosure as="div" key={endpoint.path} className={" py-3 px-4 border rounded-md " + (props.type === 'GET' ? "bg-blue-50 border-blue-400" : "bg-green-50 border-green-400")}>
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                     <span>
                      <span className={"text-gray-50 font-medium text-base px-5 py-1 rounded-md " + (props.type === 'GET' ? "bg-blue-500" : "bg-green-500")}>{props.type}</span>
                      <span className="font-medium text-gray-900 mx-2">{endpoint.path}</span>
                     { window.matchMedia("only screen and (max-width: 760px)").matches ? <br/> : null}
                      
                      <span className="text-sm mx-1 text-gray-800">{endpoint.short_description}</span>
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 ">
                    <p className=" text-gray-800 pt-2">{endpoint.body}</p>
                    
                    
                    <ParamsTable/>
                    <h1 className="text-gray-800 font-medium">Example response</h1>
                    <div className="bg-dgray-800 rounded-md p-4 my-1">
                    <JSONPretty theme={themeTest} data={example} />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
     
    )
}