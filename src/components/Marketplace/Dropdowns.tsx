import { Flex } from "@radix-ui/themes";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const Dropdowns = () => {
  return (
    <Flex justify="between" pt="8" className="font-body" wrap="wrap" gap="8">
      <Flex className="w-2/3 gap-4" >
        <Menu>
          <Menu.Button className="flex items-center gap-2 bg-[#1F1F22] w-44 p-4 rounded-xl justify-between font-body">
            All
            <ChevronDownIcon />
          </Menu.Button>
          <Menu.Items>
            <Menu.Item as={Fragment}></Menu.Item>
          </Menu.Items>
        </Menu>
        <Menu>
          <Menu.Button className="flex items-center gap-2 bg-[#1F1F22] w-44 p-4 rounded-xl justify-between font-body">
            All
            <ChevronDownIcon />
          </Menu.Button>
          <Menu.Items>
            <Menu.Item as={Fragment}></Menu.Item>
          </Menu.Items>
        </Menu>
        <div className="relative">
          <span className="absolute text-sm text-gray-300 -top-7">
            Verified
          </span>
          <Menu>
            <Menu.Button className="flex items-center gap-2 bg-[#1F1F22] w-44 p-4 rounded-xl justify-between">
              All
              <ChevronDownIcon />
            </Menu.Button>
            <Menu.Items>
              <Menu.Item as={Fragment}></Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <Menu>
          <Menu.Button className="flex items-center gap-2 bg-[#1F1F22] w-44 p-4 rounded-xl justify-between font-body">
            All
            <ChevronDownIcon />
          </Menu.Button>
          <Menu.Items>
            <Menu.Item as={Fragment}></Menu.Item>
          </Menu.Items>
        </Menu>
      </Flex>
      <Flex className="w-fit gap-4">
        <div className="relative">
          <span className="absolute text-sm text-gray-300 -top-7">Sort by</span>
          <Flex>
            <Menu>
              <Menu.Button className="flex items-center gap-2 bg-[#1F1F22] w-44 p-4 rounded-xl justify-between font-body">
                Trending
                <ChevronDownIcon />
              </Menu.Button>
              <Menu.Items>
                <Menu.Item as={Fragment}></Menu.Item>
              </Menu.Items>
            </Menu>
          </Flex>
        </div>
        <Flex className="relative flex flex-1 items-center gap-4 bg-[#1F1F22] rounded-xl">
          <span className="absolute -top-7 text-sm text-gray-300">View</span>
          <div className="p-4 hover:bg-[#27272A] rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7 2.5H3.83333C3.36662 2.5 3.13327 2.5 2.95501 2.59083C2.79821 2.67072 2.67072 2.79821 2.59083 2.95501C2.5 3.13327 2.5 3.36662 2.5 3.83333V7C2.5 7.46671 2.5 7.70007 2.59083 7.87833C2.67072 8.03513 2.79821 8.16261 2.95501 8.24251C3.13327 8.33333 3.36662 8.33333 3.83333 8.33333H7C7.46671 8.33333 7.70007 8.33333 7.87833 8.24251C8.03513 8.16261 8.16261 8.03513 8.24251 7.87833C8.33333 7.70007 8.33333 7.46671 8.33333 7V3.83333C8.33333 3.36662 8.33333 3.13327 8.24251 2.95501C8.16261 2.79821 8.03513 2.67072 7.87833 2.59083C7.70007 2.5 7.46671 2.5 7 2.5Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.1667 2.5H13C12.5333 2.5 12.2999 2.5 12.1217 2.59083C11.9649 2.67072 11.8374 2.79821 11.7575 2.95501C11.6667 3.13327 11.6667 3.36662 11.6667 3.83333V7C11.6667 7.46671 11.6667 7.70007 11.7575 7.87833C11.8374 8.03513 11.9649 8.16261 12.1217 8.24251C12.2999 8.33333 12.5333 8.33333 13 8.33333H16.1667C16.6334 8.33333 16.8667 8.33333 17.045 8.24251C17.2018 8.16261 17.3293 8.03513 17.4092 7.87833C17.5 7.70007 17.5 7.46671 17.5 7V3.83333C17.5 3.36662 17.5 3.13327 17.4092 2.95501C17.3293 2.79821 17.2018 2.67072 17.045 2.59083C16.8667 2.5 16.6334 2.5 16.1667 2.5Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.1667 11.6667H13C12.5333 11.6667 12.2999 11.6667 12.1217 11.7575C11.9649 11.8374 11.8374 11.9649 11.7575 12.1217C11.6667 12.2999 11.6667 12.5333 11.6667 13V16.1667C11.6667 16.6334 11.6667 16.8667 11.7575 17.045C11.8374 17.2018 11.9649 17.3293 12.1217 17.4092C12.2999 17.5 12.5333 17.5 13 17.5H16.1667C16.6334 17.5 16.8667 17.5 17.045 17.4092C17.2018 17.3293 17.3293 17.2018 17.4092 17.045C17.5 16.8667 17.5 16.6334 17.5 16.1667V13C17.5 12.5333 17.5 12.2999 17.4092 12.1217C17.3293 11.9649 17.2018 11.8374 17.045 11.7575C16.8667 11.6667 16.6334 11.6667 16.1667 11.6667Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 11.6667H3.83333C3.36662 11.6667 3.13327 11.6667 2.95501 11.7575C2.79821 11.8374 2.67072 11.9649 2.59083 12.1217C2.5 12.2999 2.5 12.5333 2.5 13V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7C7.46671 17.5 7.70007 17.5 7.87833 17.4092C8.03513 17.3293 8.16261 17.2018 8.24251 17.045C8.33333 16.8667 8.33333 16.6334 8.33333 16.1667V13C8.33333 12.5333 8.33333 12.2999 8.24251 12.1217C8.16261 11.9649 8.03513 11.8374 7.87833 11.7575C7.70007 11.6667 7.46671 11.6667 7 11.6667Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="p-4 hover:bg-[#27272A] rounded-xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0002 4.99967C10.4604 4.99967 10.8335 4.62658 10.8335 4.16634C10.8335 3.7061 10.4604 3.33301 10.0002 3.33301C9.53993 3.33301 9.16683 3.7061 9.16683 4.16634C9.16683 4.62658 9.53993 4.99967 10.0002 4.99967Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0002 10.833C10.4604 10.833 10.8335 10.4599 10.8335 9.99967C10.8335 9.53944 10.4604 9.16634 10.0002 9.16634C9.53993 9.16634 9.16683 9.53944 9.16683 9.99967C9.16683 10.4599 9.53993 10.833 10.0002 10.833Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0002 16.6663C10.4604 16.6663 10.8335 16.2932 10.8335 15.833C10.8335 15.3728 10.4604 14.9997 10.0002 14.9997C9.53993 14.9997 9.16683 15.3728 9.16683 15.833C9.16683 16.2932 9.53993 16.6663 10.0002 16.6663Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8335 4.99967C16.2937 4.99967 16.6668 4.62658 16.6668 4.16634C16.6668 3.7061 16.2937 3.33301 15.8335 3.33301C15.3733 3.33301 15.0002 3.7061 15.0002 4.16634C15.0002 4.62658 15.3733 4.99967 15.8335 4.99967Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8335 10.833C16.2937 10.833 16.6668 10.4599 16.6668 9.99967C16.6668 9.53944 16.2937 9.16634 15.8335 9.16634C15.3733 9.16634 15.0002 9.53944 15.0002 9.99967C15.0002 10.4599 15.3733 10.833 15.8335 10.833Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8335 16.6663C16.2937 16.6663 16.6668 16.2932 16.6668 15.833C16.6668 15.3728 16.2937 14.9997 15.8335 14.9997C15.3733 14.9997 15.0002 15.3728 15.0002 15.833C15.0002 16.2932 15.3733 16.6663 15.8335 16.6663Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.16683 4.99967C4.62707 4.99967 5.00016 4.62658 5.00016 4.16634C5.00016 3.7061 4.62707 3.33301 4.16683 3.33301C3.70659 3.33301 3.3335 3.7061 3.3335 4.16634C3.3335 4.62658 3.70659 4.99967 4.16683 4.99967Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.16683 10.833C4.62707 10.833 5.00016 10.4599 5.00016 9.99967C5.00016 9.53944 4.62707 9.16634 4.16683 9.16634C3.70659 9.16634 3.3335 9.53944 3.3335 9.99967C3.3335 10.4599 3.70659 10.833 4.16683 10.833Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.16683 16.6663C4.62707 16.6663 5.00016 16.2932 5.00016 15.833C5.00016 15.3728 4.62707 14.9997 4.16683 14.9997C3.70659 14.9997 3.3335 15.3728 3.3335 15.833C3.3335 16.2932 3.70659 16.6663 4.16683 16.6663Z"
                stroke="#A1A1AA"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
