import { AlertTriangle } from "lucide-react"

export function SetupGuide() {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-amber-800">Database Setup Required</h3>
          <div className="mt-2 text-amber-700">
            <p>To enable all features of The Black Penny website, please run the following setup scripts:</p>
            <ol className="list-decimal ml-5 mt-2 space-y-1">
              <li>
                Run <code className="bg-amber-100 px-1 rounded">scripts/create-tables.sql</code> to create the database
                tables
              </li>
              <li>
                Run <code className="bg-amber-100 px-1 rounded">scripts/seed-menu-data.sql</code> to add sample menu
                items
              </li>
              <li>
                Run <code className="bg-amber-100 px-1 rounded">scripts/seed-gallery-data.sql</code> to add sample
                gallery images
              </li>
            </ol>
            <p className="mt-2">
              Until these scripts are run, the website will display sample data instead of actual database content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
