import { groq } from "next-sanity";
import { sanityClient } from "./client";

//get all categories
export const getCategories = () => {
  return sanityClient.fetch(groq`
        *[_type == "category" && !(_id in path("drafts.**"))]
    `);
};
