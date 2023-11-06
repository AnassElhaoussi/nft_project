import React from "react";
import { Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { logo } from "../images";

const Footer = () => {
  return (
    <Flex direction="column" gap="8" className="p-10 border-zinc-800 border-2 rounded-xl">
      <Flex direction="row" justify="between">
        <Flex direction="column" gap="2">
          <Heading className="flex items-center gap-1">
            <img src={logo} alt="" />
            QSTN
          </Heading>
          <Text>The new creative community</Text>
        </Flex>
        <Flex direction="column" gap="2" className="w-1/5">
          <TextField.Root className="p-3">
            <TextField.Input variant="soft" color="gray" radius="full" />
            <TextField.Slot>
              <ArrowRightIcon cursor="pointer" />
            </TextField.Slot>
          </TextField.Root>
          <Text className="text-gray-500 text-sm">
            By Signing up for email, you agree to QSTN's{" "}
            <span className="text-purple-700">Terms Of Service</span> and{" "}
            <span className="text-purple-700">Privacy Policy</span>
          </Text>
        </Flex>
      </Flex>
      <Flex direction="row" justify="between">
        <Text className="text-gray-500">Copyright © 2023 Sink. All rights reserved</Text>
        <ul className="flex items-center gap-4">
          <li className="cursor-pointer">Terms Of Service</li>
          <li className="cursor-pointer">Privacy Policy</li>
        </ul>
      </Flex>
    </Flex>
  );
};

export default Footer;
