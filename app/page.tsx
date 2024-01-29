import Image from "next/image";

const challenges = [
  {
    number: 1,
    title: 'Stockfish Chess',
    url: 'https://github.com/vjeux/weekly-challenge-1-stockfish-chess'
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {challenges.map((challenge) => (
          <li key={challenge.title} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <a target="_blank" href={challenge.url}>
                {/* <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" /> */}
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {challenge.title}</span>
                </button>
              </a>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-100">{challenge.title}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">Weekly Challenge #{challenge.number}</p>
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
}
