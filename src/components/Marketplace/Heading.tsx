import { Flex, Heading } from "@radix-ui/themes";
import { Tab } from "@headlessui/react";

export const HeadingFC = () => {
    return (
        <Flex justify="between" wrap="wrap" gap="5">
            <Heading weight="medium" size="8" style={{
                fontFamily: "Inter, sans-serif"
            }}>
                Marketplace
            </Heading>
            <Tab.Group>
                <Tab.List className="flex items-center gap-4 bg-[#1F1F22] rounded-full p-1 text-md font-body">
                    <Tab className="hover:bg-[#27272A] hover:text-white text-gray-400 text-sm px-4 py-2 rounded-full">Active</Tab>
                    <Tab className="hover:bg-[#27272A] hover:text-white text-gray-400 text-sm px-4 py-2 rounded-full">Recommended</Tab>
                    <Tab className="hover:bg-[#27272A] hover:text-white text-gray-400 text-sm px-4 py-2 rounded-full">All Products</Tab>
                </Tab.List>
            </Tab.Group>
        </Flex>
    )
};

export default HeadingFC;
