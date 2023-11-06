import { CardsArr } from "../../Constants"
import {Flex, Card, Text, Heading, Avatar} from "@radix-ui/themes"

export const Cards = () => {
    return (
        <Flex gap="4" wrap="wrap" align="center" justify="center" className="font-body">
            {CardsArr.map(({URL}) => (
              <Card className="w-[20rem]">
                <Flex className="flex flex-col gap-4">
                    <img src={URL} alt="" className="rounded-md" />
                    <Flex direction="column" gap="1">
                        <span className="text-gray-500">Pudgy Bear</span>
                        <Text className="text-lg">Pudgy Bear #189</Text>
                    </Flex>
                    <Flex width="100%" justify="between" align="center" gap="4" className="bg-[#1F1F22] p-4 rounded-lg">
                        <Flex direction="column" gap="1">
                            <Heading className="text-gray-500 font-body" weight="regular" size="3">Author</Heading>
                            <Text className="flex items-center gap-1" size="2">
                                <Avatar fallback  src="https://s3-alpha-sig.figma.com/img/65b6/2f4b/b32f5cabd45b05ec30a16fcdecf4d88e?Expires=1700438400&Signature=mNfYRwtbq9mddF6DgOixDMlQaedqmRNcPqhLBcpKo07j8fEVXLLlxRI-MmaGiGBF~~3IaqEnUqYLSOAdKT2zZeIpZInn5zQk2K5NgxU~47p58TnLpfohjp~myyF82s9TPLt0pl6XKQiZu13VqyvJuBWFGnfIjQYr3pxOlGiC5mynBOtb4qmrbKkQjqcoTvKUVU8LccR5z-dvbyBEGH47uPYVZwTVqUQp6s3ibeOB66T5Snx-G2AzRslJt1okb4eRAv0tCqmJ0dqORPzDyDv1n4aC-sG8fxp16~Yh1I4DFmYkXoMkZF~xV3voMozTW6cEHRBMg3tTVBAaWYaqjBrI-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" radius="full" size="1" />
                                QSTN Network
                            </Text>
                        </Flex>
                        <Flex direction="column" gap="1">
                            <Heading className="text-gray-500 font-body" weight="regular" size="3">Price</Heading>
                            <Text size="2">
                                0.06ETH <span className="text-gray-400">$23.54</span>
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
              </Card>  
            ))}
        </Flex>
    )
}