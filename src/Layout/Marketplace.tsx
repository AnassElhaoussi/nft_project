import React from "react"
import HeadingFC from "../components/Marketplace/Heading"
import { Search } from "../components/Marketplace/Search"
import {Flex} from "@radix-ui/themes"
import { Dropdowns } from "../components/Marketplace/Dropdowns"
import { Cards } from "../components/Marketplace/Cards"
import Footer from "./Footer"

const Marketplace = () => {
    return (
        <Flex direction="column" gap="5">
            <HeadingFC />
            <Search />
            <Dropdowns />
            <Cards />
            <Footer />
        </Flex>
    )
}

export default Marketplace