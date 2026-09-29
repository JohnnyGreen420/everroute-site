import { products } from "../content/products";

type NowBuildingProps = {
  // "" for links on the homepage, "/" from other pages.
  hrefPrefix?: string;
};

// "Haven, in development" (and further products, when listed), linking to
// each product's entry in the homepage index.
export function NowBuilding({ hrefPrefix = "" }: NowBuildingProps) {
  return products.map((product, i) => (
    <span key={product.id}>
      {i > 0 ? "; " : null}
      <a href={`${hrefPrefix}#${product.id}`}>{product.name}</a>,{" "}
      {product.status.toLowerCase()}
    </span>
  ));
}
