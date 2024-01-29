import { basehub } from "basehub"
import Image from "next/image";

async function getAllChallenges() {
  return await basehub({ next: { revalidate: 30 }}).query({
    challenges: {
      items: {
        _slug: true,
        title: true,
        url: true,
        image: {
          url: true
        }
      }
    }
  })
}

export default async function Home() {
  const allChallenges = await getAllChallenges()

  const challenges = allChallenges.challenges.items

  return (
    <main className="flex flex-col p-24">
      <div className="z-10 w-full font-mono text-sm">  
        <div className="mb-12 mx-auto max-w-2xl lg:mx-0">
            <p className="text-lg font-semibold leading-8 tracking-tight text-gray-400">Weekly Challenge</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-rose-500 sm:text-4xl">Algorithm Arena</h1>
            <p className="mt-6 text-xl leading-8 text-rose-300">
              Algorithm Arena is a weekly programming challenge designed to ignite your creativity and 
              showcase your programming skills.
            </p>
        </div>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {challenges.map((challenge) => (
          <li key={challenge.title} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <a target="_blank" href={challenge.url || "#"}>
                <img src={challenge.image?.url} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {challenge.title}</span>
                </button>
              </a>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-100">{challenge.title}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">Weekly Challenge #{challenge._slug}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
