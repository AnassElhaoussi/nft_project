import { Table, Avatar, Flex, Text } from "@radix-ui/themes";
import { dummyHorizontalCardsData } from "../../Constants";

export const VerticalCards = () => {
  const getRankingColor = (ranking) => {
    if (ranking === "1") {
      return {
        color: "#C8AA6D",
      };
    } else if (ranking === "2") {
      return {
        color: "#CDC9C2",
      };
    } else if (ranking === "3") {
      return {
        color: "#BFA681",
      };
    } else {
      return {
        color: "#A1A1AA",
      };
    }
  };
  return (
    <Table.Root className="font-body">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Place</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Surveys</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Earned</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {dummyHorizontalCardsData.map((card) => (
          <Table.Row>
            <Table.RowHeaderCell
              style={getRankingColor(card.ranking)}
              className="text-2xl font-semibold"
            >
              #{card.ranking}{" "}
            </Table.RowHeaderCell>
            <Table.Cell>
              <Flex gap="3" align="center">
                <Avatar src={card.URL} radius="full" fallback />
                <Flex direction="column">
                  <Text className="text-lg font-[500]">{card.name} </Text>
                  <Text className="text-gray-500">{card.code} </Text>
                </Flex>
              </Flex>
            </Table.Cell>
            <Table.Cell>
              <Flex direction="column">
                <Text className="text-2xl font-[500] ">{card.surveys}</Text>
                <span className="text-gray-400">Surveys</span>
              </Flex>
            </Table.Cell>
            <Table.Cell>
              <Flex direction="column">
                <Text className="flex gap-1 items-center text-2xl font-[500]">
                  {card.earned}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1323_6317)">
                      <path
                        d="M7.99967 10.6654V7.9987M7.99967 5.33203H8.00634M14.6663 7.9987C14.6663 11.6806 11.6816 14.6654 7.99967 14.6654C4.31778 14.6654 1.33301 11.6806 1.33301 7.9987C1.33301 4.3168 4.31778 1.33203 7.99967 1.33203C11.6816 1.33203 14.6663 4.3168 14.6663 7.9987Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1323_6317">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Text>
                <span className="text-gray-400">Earned</span>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
