import { Product } from "../../types/products"
import RateIcon from "../../assets/rate-icon.svg?react";
import { formatPrice } from "../../util/numbers";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="sm:flex max-sm:w-full sm:flex-1/2 lg:flex-1/5 xl:flex-1/6 md:flex-3/12 flex-wrap flex-col gap-4 border-2 p-2 border-blue-200">
            <div className="flex flex-col">
                <div className="flex flex-row mr-0.5">
                    <div className="inline-flex flex-2/3 text-2x1 text-cyan-950 font-bold">
                        {product.title}
                    </div>
                    <div className="inline-flex gap-40">
                        <div className="flex flex-col text-center ">
                            <div className="bg-cyan-200 font-semibold inline-flex gap-2 p-2 items-center">
                                <RateIcon width={"1.5rem"} height={"1.5rem"} />
                                {product.rating.rate}
                            </div>
                            <div className="text-gray-700 text-sm border-2 border-cyan-200 p-0.5">
                                {product.rating.count} Reviews
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-violet-950 font-semibold text-sm">
                        {product.category}
                    </div>
                    <div className="flex text-lg font-semibold mt-1 justify-end">
                        {formatPrice(product.price)}
                    </div>
                </div>
            </div>
            <img className="max-h-50 m-auto" width={"auto"} src={product.image} alt={product.title.slice(20)} />
        </div>
    )
}