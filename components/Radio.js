export default function Radio(props) {
    return (
      <fieldset className="space-y-5">
        <legend className="sr-only">Notifications</legend>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              onChange={(e) => props.update(e.target.id, e.target.checked)}
              id="full-page"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              checked={props.fullPage}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
              Full page
            </label>
            <p id="comments-description" className="text-gray-500">
              Takes screenshot of entire scrollable page.
            </p>
          </div>
        </div>
        <div>
          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                onChange={(e) => props.update(e.target.id, e.target.checked)}
                id="upload"
                type="checkbox"
                checked={props.upload}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="candidates" className="font-medium text-gray-700">
                Upload
              </label>
              <p id="candidates-description" className="text-gray-500">
              Uploads image to cloud and returns url.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                onChange={(e) => props.update(e.target.id, e.target.checked)}
                id="json"
                aria-describedby="offers-description"
                name="offers"
                type="checkbox"
                checked={props.json}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="offers" className="font-medium text-gray-700">
                JSON
              </label>
              <p id="offers-description" className="text-gray-500">
                Request returns json response.
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    )
  }