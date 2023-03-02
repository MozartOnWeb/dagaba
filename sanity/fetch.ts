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

//get category medications
export const getCategoryMedications = ({ category }: { category: string }) => {
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

//get medication
export const getMedication = ({ medication }: { medication: string }) => {
  return sanityClient.fetch(
    groq`
        *[_type == "medication" && slug.current == $medication && !(_id in path("drafts.**"))][0] {
            name,
            composition,
            posologie,
            presentation,
            description,
            "image": image.asset -> url,
            categories[] -> {
                "slug": slug.current,
                name
            }
        }
    `,
    { medication }
  );
};

//get 4 recent Medication
export const getRecentMedications = () => {
  return sanityClient.fetch(
    groq`
        *[_type == "medication"] | order(_createdAt desc) [0...3] {
          name,
            "slug": slug.current,
            "image": image.asset -> url
        }
    `
  );
};

//get featured medication
export const getFeaturedMedications = () => {
  return sanityClient.fetch(
    groq`
        *[_type == 'medication' && featured == true ] | order(_createdAt desc) [0...3] {
          name,
            "slug": slug.current,
            "image": image.asset -> url
        }
    `
  );
};

//get featured medication
export const getHelpfulInfos = () => {
  return sanityClient.fetch(
    groq`
        *[_type == "Helpful_Infos" && !(_id in path("drafts.**"))] {
            headline,
            introduction,
            content,
        }
    `
  );
};
