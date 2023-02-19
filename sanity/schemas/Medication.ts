import { Rule } from "sanity";

//medications schema
export const Medication = {
  name: "medication",
  type: "document",
  title: "Medication",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule: Rule) => Rule.unique(),
    },
  ],
};
