import logoImage from '../assets/sources/lyric_lg_rgb_mnt_wht.png';

/**
 * Logo component displays the main logo and a MUSIC label.
 * @returns {JSX.Element}
 */
const Logo = () => (
  <div className="flex flex-col flex-wrap justify-center relative lg:mb-0">
    <img className='w-32 h-auto' src={logoImage} alt="Main Lyric Logo" />
    <span className="pt-1 tracking-[3.5px] absolute bottom-3 right-1.5 text-[9px] text-lyric-green font-bold">
      MUSIC
    </span>
  </div >
)

export default Logo;