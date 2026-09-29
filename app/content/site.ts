export const site = {
  name: "EverRoute",
  url: "https://everroute.ca",
  location: "New Brunswick, Canada",
  email: "hello@everroute.ca",
  founder: "Marc Cormier",
} as const;

export const primaryNav = [
  { label: "Products", href: "/#products" },
  { label: "Approach", href: "/#approach" },
  { label: "Company", href: "/company/" },
] as const;

// Founder copy, as already accepted on the public site.
export const founder = {
  question:
    "What would personal technology look like if it helped carry some of life’s mental load without taking control away from the person?",
  bio: "Marc is a Canadian technology professional, husband, and father building products around a problem he experiences personally.",
} as const;
