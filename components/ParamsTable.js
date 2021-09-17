export default function ParamsTable() {
    return (
       
       
          <div className="w-full my-4  rounded-lg">
            <div className="w-full ">
              <table className="w-full">
                <thead>
                  <tr className="text-xs  text-left text-gray-900   border-b border-gray-300">
                    <th className="py-2">Query Parameter</th>
                    <th className=" py-2">Type</th>
                    <th className=" py-2">Required</th>
                  </tr>
                </thead>
                <tbody className="">
                 
                    <td className=" py-2 ">
                      url
                      <div className="flex items-center text-sm">
                      </div>
                    </td>
                 
                    <td className="py-2 text-sm ">String</td>
                    <td className="py-2 text-sm ">Optional</td>
              
                 
                </tbody>
              </table>
            </div>
          </div>
    )
}