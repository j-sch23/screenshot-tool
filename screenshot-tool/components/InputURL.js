
  export default function InputURL(props) {
    return (
      <div className="flex-grow">
        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
          {props.label}
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            https://
          </span>
          <input
            onChange={(e) => {props.update(e.target.value)}}
            type="text"
            name="company-website"
            id="company-website"
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
            placeholder="www.example.com"
          />
        </div>
      </div>
    )
  }