import Container from "../../commonComponents/Container";
import ShoppingBagHeartIcon from "../../assets/heart-bag.svg?react";
import ShoppingCartIcon from "../../assets/shopping-cart.svg?react";
import WalletIcon from "../../assets/card-holder.svg?react";
import TextCardWrapper from "./TextCardWrapper";
import TextCard from "./TextCard";
import ImageWrapper from "./ImageWrapper";

export default function HomePage() {
  const commonImageClassName = "ml-5 max-md:mt-5 w-auto";

  return (
    <Container className="flex flex-col space-y-8">
      <TextCardWrapper className="bg-cyan-100">
        <TextCard className="text-4xl font-semibold">
          Welcome to Fake Store - Your Ultimate Shopping Destination!
        </TextCard>
        <ImageWrapper>
          <ShoppingBagHeartIcon className={`h-20 ${commonImageClassName}`} />
        </ImageWrapper>
      </TextCardWrapper>
      <TextCardWrapper className="bg-cyan-100">
        <TextCard className="text-2xl">
          Discover amazing deals, unbeatable prices, and a wide variety of
          products all in one place. Whether you're looking for the latest
          trends, everyday essentials, or just browsing for fun, we've got
          something for everyone.
        </TextCard>
        <ImageWrapper>
          <ShoppingCartIcon className={`h-30 ${commonImageClassName}`} />
        </ImageWrapper>
      </TextCardWrapper>
      <TextCardWrapper className="bg-cyan-100">
        <TextCard className="text-2xl">
          Enjoy a seamless shopping experience, secure payments, and fast
          shipping. Start exploring now and find the perfect items just for you!
        </TextCard>
        <ImageWrapper>
          <WalletIcon className={`h-30 ${commonImageClassName}`} />
        </ImageWrapper>
      </TextCardWrapper>
      <TextCardWrapper className="bg-cyan-100 justify-center">
        <div className="text-2xl">Happy Shopping!</div>
      </TextCardWrapper>
    </Container>
  );
}
