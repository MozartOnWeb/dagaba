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
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "composition",
      type: "string",
      title: "Composition",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "posologie",
      type: "string",
      title: "Posologie",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "presentation",
      type: "string",
      title: "Presentation",
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
