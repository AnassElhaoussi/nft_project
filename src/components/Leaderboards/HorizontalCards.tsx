import { Flex, Card, Avatar, Text } from "@radix-ui/themes";
import { dummyHorizontalCardsData } from "../../Constants";

export const HorizontalCards = () => {
  return (
    <Flex gap="4" wrap="wrap" align="center" justify="center">
      {dummyHorizontalCardsData.map((card) => {
        return (
          <Card className="w-[30rem] font-body " variant="ghost">
            <Flex direction="column" gap="4" p="5" className="bg-[#1F1F22] rounded-2xl">
              <Flex justify="between" align="center" p="4" style={{
                borderRadius: "1rem",
                background: card.bg_color
              }}>
                <Flex gap="2">
                  <Avatar src={card.URL} fallback radius="full" />
                  <Flex direction="column">
                    <Text className="text-lg font-[500] ">{card.name}</Text>
                    <Text className="text-sm text-gray-300">@{card.code}</Text>
                  </Flex>
                </Flex>
                <span className="text-2xl font-semibold">#{card.ranking}</span>
              </Flex>
              <Flex justify="between" gap="4">
                <Flex
                  direction="column"
                  gap="2"
                  className="bg-[#27272A] w-1/2 rounded-xl px-6 py-2"
                >
                  <Text className="text-gray-400">Surveys</Text>
                  <Text size="5" className="font-[500]">
                    {card.surveys}{" "}
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  gap="2"
                  className="bg-[#27272A] w-1/2 rounded-xl px-6 py-2"
                  align="end"
                >
                  <Text className="text-gray-400">Earned</Text>
                  <Text size="5" className="font-[500] flex items-center gap-2">
                    {card.earned}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_442_32232)">
                        <path
                          d="M7.99967 10.6654V7.9987M7.99967 5.33203H8.00634M14.6663 7.9987C14.6663 11.6806 11.6816 14.6654 7.99967 14.6654C4.31778 14.6654 1.33301 11.6806 1.33301 7.9987C1.33301 4.3168 4.31778 1.33203 7.99967 1.33203C11.6816 1.33203 14.6663 4.3168 14.6663 7.9987Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_442_32232">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};
