import { Dumbbell, Menu } from 'lucide-react'
import { navbarData } from '../data/NavbarData'
import { useRef } from 'react'
const Navbar = () => {
  const translate = useRef(null)
  return (
    <nav className="flex justify-between gap-10 lg:gap-36 items-center">
      <a href="/" className="ml-5">
        <Dumbbell className="text-red-600" size={30} />
      </a>
      <ul
        ref={translate}
        className="flex max-md:absolute md:translate-x-0 max-md:translate-x-[100%] items-center flex-grow gap-8 justify-evenly font-Poppins font-semibold max-md:bg-black max-md: py-5 max-md:flex-col max-md:gap-10 max-md:right-[0px] max-md:p-10"
      >
        {navbarData.map((item) => {
          return (
            <li
              key={item.id}
              className=" hover:text-red-600  relative transition-colors duration-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-7px] after:bg-white hover:after:w-full after:duration-500 ease-out"
            >
              <a href="/">{item.name}</a>
            </li>
          )
        })}
        <button className="md:hidden flex justify-center items-center">
          <Menu
            onClick={() => {
              translate.current.style.transform = 'translateX(100%)'
              translate.current.style.transition = 'all 0.5s ease-out'
            }}
          />
        </button>
      </ul>
      <button className="md:hidden flex justify-center items-center">
        <Menu
          onClick={() => {
            translate.current.style.transform = 'translateX(0)'
            translate.current.style.transition = 'all 0.5s ease-out'
          }}
        />
      </button>
    </nav>
  )
}
export default Navbar
