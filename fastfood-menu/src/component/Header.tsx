

interface HeaderProps {
    logoSrc: string;
    title: string;
    tagline: string;
}


const Header: React.FC<HeaderProps> = ({logoSrc, title, tagline})=> {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-red-400 sm:px-0 py-4 lg:px-24">
        <div className="flex gap-2 items-center">
          <img src={logoSrc} alt={title} className="w-10" />
          <h1 className="font-bold sm:text-[13px] md:text-[15px] lg:text-xl text-white">{title}</h1>
        </div>
        <div>
          <span className="font-bold lg:text-xl md:text-[15px] sm:text-[13px] text-white">
            {tagline}
          </span>
        </div>
      </div>
    </>
  );
}
export default Header;