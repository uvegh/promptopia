import  Feed from '@components/Feed'

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
<h1 className="head_text">
    Discover and share
    {/* hide on small screen display br on  md screen*/}
    <br className="max-md:hidden" />   
</h1>
<span className="orange_gradient"> AI-powered Prompts</span>
<p className="desc text-center">

    Nextjs tutorial,building a chatGPT promppt full stack progectstack 
</p>
<Feed/>
   </section>
  )
}

export default Home