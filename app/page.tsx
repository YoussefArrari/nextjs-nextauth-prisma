import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {" "}
        <div className="flex items-center gap-2 ">
          <p>By</p>
          {"  "}
          <a
            href="https://portfolio-src.vercel.app"
            target="_blank"
            className="font-mono font-bold flex items-center "
          >
            <Image
              src="/Linkicon.svg"
              alt="Link Icon"
              className="dark:invert"
              width={24}
              height={24}
            />
            <span className="underline  underline-offset-2 ">
              YoussefArrari
            </span>
          </a>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="font-bold text-base text-gray-200 font-sans bg-gray-950 px-6 py-2 rounded-md  hover:opacity-90"
            href="http://localhost:3000/login"
            rel="noopener noreferrer"
          >
            Log In
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="text-5xl font-bold z-40 text-center">
          Next.js + NextAuth + Prisma
          <div className="text-blue-600 pt-6">Starter kit</div>
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/*card 1 */}
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Tech Used </h2>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                href="https://www.typescriptlang.org"
                className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
              >
                TypeScript
              </a>
              <a
                target="_blank"
                href="https://nextjs.org"
                className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
              >
                Nextjs (App directory)
              </a>
              <a
                target="_blank"
                href="https://next-auth.js.org"
                className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
              >
                NextAuth
              </a>
              <a
                target="_blank"
                href="https://next-auth.js.org"
                className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
              >
                React Hook Form
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                href="https://tailwindcss.com"
                className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
              >
                Tailwindcss
              </a>
              <a
                target="_blank"
                href="https://www.prisma.io"
                className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
              >
                Prisma
              </a>
              <a
                target="_blank"
                href="https://www.prisma.io"
                className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
              >
                Axios
              </a>
            </div>
          </div>
        </div>

        {/*card 2 */}
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Pages </h2>
          <div className="flex flex-row gap-4">
            <a
              href="/"
              className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
            >
              Home page
            </a>
            <a
              href="/"
              className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-blue-400 hover:opacity-90`}
            >
              Dashboard page
            </a>
          </div>
          <div className="flex flex-col">
            <a
              href="/"
              className={`m-0 max-w-[30ch] text-sm opacity-50 pt-2 hover:text-blue-400 hover:opacity-90`}
            >
              Log In page
            </a>
            <a
              href="/"
              className={`m-0 max-w-[30ch] text-sm opacity-50 pt-2 hover:text-blue-400 hover:opacity-90`}
            >
              Sign Up page
            </a>
          </div>
        </div>
        {/*card 3 */}
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Redirecting </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Using{" "}
            <span className="font-bold  ">
              <a
                target="_blank"
                href="https://nextjs.org/docs/pages/building-your-application/routing/middleware"
                className={`m-0 max-w-[30ch] text-sm  hover:text-blue-500 hover:opacity-100`}
              >
                Middleware
              </a>
            </span>{" "}
            unauthorized users are redirected to the Loing Page and authorized
            users are redirected to the Dashboard page
          </p>
        </div>
        {/*card 4 */}
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Source Code{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See the source code here
          </p>
        </a>
      </div>
    </main>
  );
}
