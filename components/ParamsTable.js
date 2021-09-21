export default function ParamsTable(props) {
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

          {props.data.map((data) => {
            return (
              <tbody className="">
                <td className=" py-2 text-sm ">
                  <code>{data.param}</code>
                </td>
                <td className="py-2 text-sm ">{data.type}</td>
                <td className="py-2 text-sm italic ">{data.required}</td>{" "}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
