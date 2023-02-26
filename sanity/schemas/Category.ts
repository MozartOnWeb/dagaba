import { Rule, SchemaTypeDefinition } from "sanity";

//medication categories schema
export const Category: SchemaTypeDefinition = {
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
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "number_of_stock",
      type: "number",
      title: "Number Of Stock",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
