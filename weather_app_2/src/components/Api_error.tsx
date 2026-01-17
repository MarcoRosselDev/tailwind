export default function Api_error({ retryFn }: { retryFn: () => void }) {
  return (
    <main
      className=" w-full min-h-156 
    flex flex-col justify-top items-center pt-20 gap-4
    text-center
    "
    >
      <img src="/images/icon-error.svg" alt="icon error" className="h-7" />
      <h1 className="font-DM-bold text-4xl">Something went wrong</h1>
      <p>
        We couldn't connect to the server (API error). Please try <br /> again
        in a few moments.
      </p>
      <button
        className="flex gap-2 p-1.5 pl-3 pr-3 rounded
      bg-own-neutral-700 cursor-pointer
      "
        onClick={() => retryFn()}
      >
        <img src="/images/icon-retry.svg" alt="icon retry" /> Retry
      </button>
    </main>
  );
}
