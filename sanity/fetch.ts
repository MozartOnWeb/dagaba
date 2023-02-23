import { groq } from "next-sanity";
import { sanityClient } from "./client";

//get all categories
export const getAllCategories = () => {
  return sanityClient.fetch(groq`
        *[_type == "category" && !(_id in path("drafts.**"))] {
            name,
            "slug": slug.current,
        }
    `);
};

//get single category
export const getSingleCategory = ({ category }: { category: string }) => {
  return sanityClient.fetch(
    groq`
        *[_type == "category" && slug.current == $category && !(_id in path("drafts.**"))][0] {
            name,
            description,
            number_of_stock,
        }
    `,
    { category }
  );
};
