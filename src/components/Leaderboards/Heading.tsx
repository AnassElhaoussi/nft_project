import {Flex, Heading} from "@radix-ui/themes"
import {Tab} from "@headlessui/react"

export const HeadingFC = () => {
    return (
        <Flex justify="between" className="">
            <Heading weight="medium" size="8" style={{
                fontFamily: "Inter, sans-serif"
            }}>
                Leaderboards
            </Heading>
            <Tab.Group>
                <Tab.List className="flex items-center gap-4 bg-[#1F1F22] rounded-full p-1 text-md font-body">
                    <Tab className="hover:bg-[#27272A] hover:text-white text-gray-400 text-sm px-4 py-2 rounded-full">Week</Tab>
                    <Tab className="hover:bg-[#27272A] hover:text-white text-gray-400 text-sm px-4 py-2 rounded-full">Month</Tab>
                    <Tab className="hover:bg-[#27272A] hover:text-white text-gray-400 text-sm px-4 py-2 rounded-full">Year</Tab>
                </Tab.List>
            </Tab.Group>
        </Flex>
    )
}