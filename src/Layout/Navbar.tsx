
import { Flex, Heading } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { logo, ellipse } from "../images";
import {useLocation, Link} from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  return (
    <Flex className="font-body" justify="between" wrap="wrap">
      <Flex align="center" gap="9">
        <Flex align="center" gap="2">
          <img src={logo} className="w-4" />
          <Heading className="font-body" weight="medium" size="3">
            QSTN
          </Heading>
        </Flex>
        <Flex align="center" gap="7">
          <li
            className="flex gap-2 text-md font-normal hover:bg-[#27272A] py-3 px-5 rounded-xl cursor-pointer" 
            style={{
              backgroundColor: location.pathname === "/discover" ? "#27272A" : "transparent"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.49984 2.91699V1.66699M4.21705 4.21754L3.33317 3.33366M4.21705 10.8337L3.33317 11.7175M10.8332 4.21754L11.7171 3.33366M2.9165 7.50033H1.6665M13.2202 13.4916L11.1438 17.3479C10.9066 17.7884 10.788 18.0087 10.6453 18.0644C10.5214 18.1127 10.3819 18.0991 10.2698 18.0276C10.1406 17.9453 10.067 17.7062 9.91968 17.228L7.03749 7.87137C6.91717 7.48075 6.85701 7.28544 6.90542 7.15352C6.94758 7.03862 7.03813 6.94807 7.15303 6.90591C7.28495 6.8575 7.48026 6.91766 7.87088 7.03799L17.2275 9.9202C17.7057 10.0675 17.9448 10.1411 18.0271 10.2703C18.0985 10.3825 18.1122 10.5219 18.0639 10.6458C18.0081 10.7885 17.7879 10.9071 17.3473 11.1443L13.4911 13.2207C13.4257 13.256 13.393 13.2736 13.3643 13.2962C13.3389 13.3163 13.3159 13.3393 13.2958 13.3648C13.2731 13.3934 13.2555 13.4262 13.2202 13.4916Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Discover
          </li>
          
          <Link to="/marketplace"
            className="flex gap-2 text-md font-normal hover:bg-[#27272A] py-3 px-5 rounded-xl cursor-pointer" 
            style={{
              backgroundColor: location.pathname === "/marketplace" ? "#27272A" : "transparent"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3332 6.66667C13.3332 7.55072 12.982 8.39857 12.3568 9.02369C11.7317 9.64881 10.8839 10 9.99982 10C9.11576 10 8.26792 9.64881 7.6428 9.02369C7.01768 8.39857 6.66649 7.55072 6.66649 6.66667M3.0275 6.16782L2.44417 13.1678C2.31885 14.6716 2.2562 15.4235 2.51039 16.0035C2.73372 16.5131 3.12068 16.9336 3.60997 17.1985C4.16688 17.5 4.92137 17.5 6.43035 17.5H13.5693C15.0783 17.5 15.8328 17.5 16.3897 17.1985C16.879 16.9336 17.2659 16.5131 17.4892 16.0035C17.7434 15.4235 17.6808 14.6716 17.5555 13.1678L16.9721 6.16782C16.8643 4.87396 16.8104 4.22703 16.5239 3.73738C16.2716 3.3062 15.8959 2.9605 15.4452 2.74487C14.9335 2.5 14.2843 2.5 12.986 2.5L7.01369 2.5C5.71534 2.5 5.06617 2.5 4.55442 2.74487C4.10377 2.9605 3.72807 3.3062 3.47576 3.73738C3.18923 4.22703 3.13532 4.87396 3.0275 6.16782Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Marketplace
          </Link>
          <Link to="/leaderboards"
           className="flex gap-2 text-md font-normal hover:bg-[#27272A] py-3 px-5 rounded-xl cursor-pointer" 
           style={{
             backgroundColor: location.pathname === "/leaderboards" ? "#27272A" : "transparent"
           }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.5 5.83333H3.83333C3.36662 5.83333 3.13327 5.83333 2.95501 5.92416C2.79821 6.00406 2.67072 6.13154 2.59083 6.28834C2.5 6.4666 2.5 6.69996 2.5 7.16667V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7.5M7.5 17.5H12.5M7.5 17.5L7.5 3.83333C7.5 3.36662 7.5 3.13327 7.59083 2.95501C7.67072 2.79821 7.79821 2.67072 7.95501 2.59083C8.13327 2.5 8.36662 2.5 8.83333 2.5L11.1667 2.5C11.6334 2.5 11.8667 2.5 12.045 2.59083C12.2018 2.67072 12.3293 2.79821 12.4092 2.95501C12.5 3.13327 12.5 3.36662 12.5 3.83333V17.5M12.5 9.16667H16.1667C16.6334 9.16667 16.8667 9.16667 17.045 9.25749C17.2018 9.33739 17.3293 9.46487 17.4092 9.62167C17.5 9.79993 17.5 10.0333 17.5 10.5V16.1667C17.5 16.6334 17.5 16.8667 17.4092 17.045C17.3293 17.2018 17.2018 17.3293 17.045 17.4092C16.8667 17.5 16.6334 17.5 16.1667 17.5H12.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Leaderboards
          </Link>
        </Flex>
      </Flex>
      <Flex align="center" gap="5">
        <button className="flex items-center gap-2 bg-[#1F1F22] py-2 px-5 rounded-xl border-transparent border-4 hover:border-[#1F1F22] hover:bg-transparent transition-all">
          Network
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.00016 3.33301V12.6663M3.3335 7.99967H12.6668"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="flex items-center gap-2">
          <img src={ellipse} alt="" className="w-10 h-10 rounded-full" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
