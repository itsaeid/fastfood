

interface HeaderProps {
    logoSrc: string;
    title: string;
    tagline: string;
}


const Header: React.FC<HeaderProps> = ({logoSrc, title, tagline})=> {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-red-400 py-4 px-24">
        <div className="flex gap-2 items-center">
          <img src="/img/logo.png" alt={title} className="w-10" />
          <h1 className="font-bold text-xl text-white">{title}</h1>
        </div>
        <div>
          <span className="font-bold text-xl text-white">
            بهترین غذاها در سریع‌ترین زمان
          </span>
        </div>
      </div>
    </>
  );
}
export default Header;