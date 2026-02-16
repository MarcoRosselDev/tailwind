function App() {

  return (
    <div className="border p-4 font-dmsans bg-pr-white-200 grid gap-7">
      <div className="bg-pr-purple-500 rounded-2xl p-10
      text-pr-white text-center flex flex-col items-center
      ">
          <p className="text-[2.725rem] text-base/11 mb-5 font-medium">Social Media 
          <span className="text-pr-yellow-500"> 10x</span> <span className="font-dmsans-italic">Faster</span> with AI</p>
          <img className="max-w-45" 
          src="/images/illustration-five-stars.webp" alt="I don't know what's this" />
          <p className="mt-2">Over 4,000 5-star reviews</p>
      </div>
      <div className=" p-4 bg-pr-white-400 rounded-lg">
        <img src="/images/illustration-multiple-platforms.webp"
        className=" bg-pr-white-400"
        alt="I don't know what's this" />
        <p className="text-[24px] font-bold mt-3 text-base/6">Manage multiple accounts and platforms.</p>
      </div>
      <div className="bg-pr-yellow-500 p-4 rounded-lg ">
        <p className="text-[24px] font-bold text-base/6">Maintain a consistent position schedule.</p>
        <img src="/images/illustration-consistent-schedule.webp"
        className="mt-4 max-w-55"
        alt="I don't know what's this" />
      </div>
      <div>
        <img src="/images/illustration-ai-content.webp" alt="I don't know what's this" />
        <img src="/images/illustration-audience-growth.webp" alt="I don't know what's this" />
      </div>
      
      <div>
        <img src="/images/illustration-create-post.webp" alt="I don't know what's this" />
      </div>
      <div>
      </div>
      <div>
        <img src="/images/illustration-grow-followers.webp" alt="I don't know what's this" />
      </div>
      
      <div>
        <img src="/images/illustration-schedule-posts.webp" alt="I don't know what's this" />
      </div>
    </div>
  )
}

export default App
