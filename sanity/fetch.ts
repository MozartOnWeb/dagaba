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

//get single category medications
export const getSingleCategoryMedications = ({
  category,
}: {
  category: string;
}) => {
  return sanityClient.fetch(
    groq`
        *[_type=="medication" && references(*[_type=="category" && slug.current == $category]._id)] {
            name,
            "slug": slug.current,
            "image": image.asset -> url
        }
    `,
    { category }
  );
};

// *[references("151dc744-7efe-431f-a38f-a7bfb8541d45")] {
//   categories[] ->
// }
