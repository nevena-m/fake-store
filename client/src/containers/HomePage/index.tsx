import Container from "../../commonComponents/Container";

export default function HomePage() {
    return (
        <Container className="flex flex-col space-y-6">
            <div className="text-4xl">Welcome to Fake Store - Your Ultimate Shopping Destination!</div>
            <div className="text-2xl">
                Discover amazing deals, unbeatable prices, and a wide variety of products all in one place. 
                Whether you're looking for the latest trends, everyday essentials, or just browsing for fun, we've got something for everyone.
            </div>
            <div className="text-2xl">
                Enjoy a seamless shopping experience, secure payments, and fast shipping. Start exploring now and find the perfect items just for you!
            </div>
            <div className="text-2xl">
                Happy Shopping!
            </div>
        </Container>
    )
}