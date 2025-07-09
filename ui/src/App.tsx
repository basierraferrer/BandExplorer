
import { useState } from "react";
import { LuBell, LuMenu, LuMessageCircle, LuSettings, LuX } from "react-icons/lu";
import soon from './assets/sources/soon.png'
import { Logo, Card, Search } from "./components";
import { useFetchBands, useFilterBands } from "./hooks";


const App = () => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const [resizeLayout, setResizeLayout] = useState(false);

  const { bandsData, isLoading, categories } = useFetchBands();
  const { changeFilter, filteredBands, searchValue, filterSelected, onChangeSearch } = useFilterBands(bandsData);

  const toggleOpenMenu = () => {
    setShouldOpen(!shouldOpen);
  }




  return (
    <div className="flex flex-col h-full gap-5 xl:flex-row ">
      <main className="flex flex-col grow gap-5">
        <nav className={`flex flex-wrap items-stretch justify-between grow rounded-[10px] bg-demo ${shouldOpen ? 'h-auto' : 'max-h-[89px]'} w-full`}>
          <Logo />
          <div className="flex items-center mr-5">
            <div className="relative lg:hidden flex items-center">
              <button onClick={toggleOpenMenu} className="bg-transparent hover:bg-[var(--lyric-green)] flex items-center justify-center w-12 h-12 text-base text-center align-middle  border hover:border-2 border-solid shadow-none cursor-pointer rounded-2xl text-gray-custom border-stone-200 " >
                <LuMenu />
              </button>
            </div>
            <div className="hidden lg:flex text-lg text-[var(--color)] font-medium items-center gap-2.5">
              {isLoading && (
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-9 w-20 rounded-[19px] bg-gray-200 animate-pulse"
                    />
                  ))}
                </div>
              )}
              {!isLoading && categories.length && categories.map(chip => (
                <button
                  key={chip}
                  onClick={() => changeFilter(chip)}
                  className={`capitalize cursor-pointer ${filterSelected === chip ? 'bg-[var(--lyric-green)]' : 'bg-[var(--bg-color)] hover:text-gray-600 hover:font-semibold hover:bg-gray-50'} block py-2 px-3 min-w-20 rounded-[19px]`}
                >{chip}</button>
              ))}
              <Search searchValue={searchValue} onSearchChange={onChangeSearch} />
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-evenly lg:mr-5 text-3xl text-[var(--color)] w-3xs font-medium items-center">
            <LuBell />
            <LuSettings />
            <LuMessageCircle />
          </div>
          <div className={`justify-between items-end w-full ${shouldOpen ? '' : 'hidden'}`}>
            <Search searchValue={searchValue} onSearchChange={onChangeSearch} />
            <div className="flex-col flex mt-4">
              {isLoading && (
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-9 w-20 rounded-[19px] bg-gray-200 animate-pulse"
                    />
                  ))}
                </div>
              )}
              {!isLoading && categories.length && categories.map(chip => (
                <button
                  key={chip}
                  onClick={() => changeFilter(chip)}
                  className={`capitalize cursor-pointer ${filterSelected === chip ? 'bg-[var(--lyric-green)]' : 'bg-[var(--bg-color)] hover:text-gray-600 hover:font-semibold hover:bg-gray-50'} block py-2 px-3 min-w-20 rounded-[19px]`}
                >{chip}</button>
              ))}
            </div>
          </div>
        </nav>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {isLoading && Array(3).map((_, i) =>
            <article key={i} className="w-full h-auto rounded-[10px] overflow-hidden bg-[var(--bg-header)]">
              <div className="w-full h-[180px] bg-gray-200 animate-pulse" />
              <div className="p-5">
                <span className="bg-gray-200 animate-pulse w-full h-4 mb-2"></span>
                <span className="bg-gray-200 animate-pulse w-full h-4"></span>
              </div>
            </article>
          )}
          {!isLoading && filteredBands.length && filteredBands.map((band) => (<Card key={band.id} {...band} />))}
        </section>
      </main>
      <aside className={`w-full lg:relative ${resizeLayout ? 'hidden' : 'lg:w-[30%] justify-between'} rounded-[10px] bg-demo px-[30px] py-10`}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold font-inter text-[var(--lyric-green)]">Welcome to Lyric Music </h2>
          <LuX className="text-lg text-[var(--color)] cursor-pointer hidden lg:block" onClick={() => {
            setResizeLayout(true)
          }} />
        </div>
        <div className="flex flex-col text-[var(--color)] mb-5">
          <p className="mb-4">We’re thrilled to have you join us on this musical journey! Lyric Music is your gateway to a fresh and immersive way to enjoy the bands and artists you love. Whether you're searching for your all-time favorite tracks, exploring curated playlists crafted to fit every mood, or discovering new songs that will soon become your go-to anthems, Lyric Music is here to elevate your listening experience.</p>
          <p className="mb-4">Imagine having the perfect soundtrack for every moment of your life, from energizing workouts to peaceful evenings under the stars. With an intuitive interface designed to make finding music effortless and enjoyable, you’ll spend less time searching and more time grooving. Best of all, it’s completely free—because we believe that great music should be accessible to everyone.</p>
          <p className="mb-4">At Lyric Music, we’re passionate about creating a community where music lovers like you can explore, connect, and celebrate the power of sound. So dive in, press play, and let the music move you. Welcome to your new favorite way to listen.</p>
        </div>
        <div className="flex w-full bg-[var(--bg-color)] rounded-[10px] py-5 px-2.5">
          <img className="w-32 h-14 mr-8" src={soon} alt="Coming soon image" />
          <div className="flex flex-col">
            <h3 className="text-[var(--lyric-green)] text-[19px] font-bold">COMING SOON</h3>
            <p className="text-[var(--color)] text-sm">Check out whats new for 2025 from the Lyric team.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default App;