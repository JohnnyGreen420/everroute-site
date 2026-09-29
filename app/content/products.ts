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
    id: "haven",
    name: "Haven",
    summary: "A private AI assistant for family life.",
    description:
      "Haven is being built to help households capture what matters, review shared information, organize plans and routines, and recall important details when they are needed.",
    status: "In development",
    statusNote:
      "Haven is in active development. Product features and availability will evolve as we build and test the experience.",
    focus: [
      "Trusted household memory",
      "Family plans, tasks, and routines",
      "Information people can review",
      "Private by design",
    ],
    links: [
      { label: "Visit heyhaven.ca", href: "https://heyhaven.ca" },
      { label: "Join the Haven waitlist", href: "https://tally.so/r/2EoJ9V" },
    ],
    linkNote: "The waitlist form is hosted by Tally.",
  },
];
