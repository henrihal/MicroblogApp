import { Link } from "react-router"

function PageNotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-transparent my-25">
        <div className="text-center">
          <p className="text-base font-semibold text-sky-400">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="px-3 py-1.5 bg-sky-600 text-white rounded text-md hover:bg-sky-700 cursor-pointer transition-colors font-medium"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default PageNotFound
