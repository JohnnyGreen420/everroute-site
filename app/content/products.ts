// Approved public products only. Internal projects stay out of the index.
export type Product = {
  id: string;
  name: string;
  logo?: { src: string; width: number; height: number };
  summary: string;
  description: string;
  status: "In development";
  links: { label: string; href: string }[];
};

export const abri: Product = {
  id: "abri",
  name: "ABRI",
  logo: { src: "/abri-mark-light.svg", width: 800, height: 776 },
  summary: "A private AI assistant for family life.",
  description:
    "A change in pickup time. A note someone shared last week. We’re designing ABRI to help families keep track of those details and make plans together.",
  status: "In development",
  links: [{ label: "Visit ABRI", href: "https://heyabri.com" }],
};

export const products = [abri];
