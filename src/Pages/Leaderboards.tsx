import {Theme} from "@radix-ui/themes"
import Navbar from "../Layout/Navbar"
import { HeadingFC } from "../components/Leaderboards/Heading"
import { HorizontalCards } from "../components/Leaderboards/HorizontalCards"
import { VerticalCards } from "../components/Leaderboards/VerticalCards"
import Footer from "../Layout/Footer"

const Leaderboards = () => {
    return (
        <Theme appearance="dark" className="flex flex-col gap-10 py-4 px-10">
            <Navbar />
            <HeadingFC />
            <HorizontalCards />
            <VerticalCards/>
            <Footer />
        </Theme>
    )   
}

export default Leaderboards