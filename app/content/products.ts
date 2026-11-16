// Public product index. Add a product here only once it has an approved
// public description; internal projects stay out until then.

// Add further states only once each has an approved public presentation.
export type ProductStatus = "In development";

export type ProductLink = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  logo?: { src: string; width: number; height: number };
  summary: string;
  description: string;
  status: ProductStatus;
  statusNote: string;
  focus: string[];
  links: ProductLink[];
  linkNote?: string;
};

export const products: Product[] = [
  {
    id: "abri",
    name: "ABRI",
    logo: { src: "/abri-mark-light.svg", width: 800, height: 776 },
    summary: "A private AI assistant for family life.",
    description:
      "ABRI is being built to help households capture what matters, review shared information, organize plans and routines, and recall important details when they are needed.",
    status: "In development",
    statusNote:
      "ABRI is in active development. Product features and availability will evolve as we build and test the experience.",
    focus: [
      "Trusted household memory",
      "Family plans, tasks, and routines",
      "Information people can review",
      "Private by design",
    ],
    links: [
      { label: "Visit ABRI", href: "https://heyabri.com" },
    ],
  },
];
