import { Rule } from "sanity";

//medication categories schema
export const Category = {
  name: "category",
  type: "document",
  title: "Category",
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
      name: "medications",
      type: "array",
      title: "Medications",
      of: [{ type: "reference", to: { type: "medication" } }],
    },
  ],
};
