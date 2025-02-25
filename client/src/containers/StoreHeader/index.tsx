import FakeStoreLogo from "../../assets/store-bag.svg?react";
import Container from "../../commonComponents/Container";
import StoreNavigation from "../StoreNavigation";

export default function StoreHeader() {
    return (
        <Container className="bg-cyan-700 text-zinc-100 p-5">
            <FakeStoreLogo className="size-12 shrink-0"/>
            <div className="flex text-3xl font-bold tracking-wide ml-3 items-center"> Fake Store </div>
            <StoreNavigation/>
        </Container>
    )
}