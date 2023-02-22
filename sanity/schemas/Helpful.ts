import { Rule, SchemaTypeDefinition } from "sanity";

//medication categories schema
export const Helpful: SchemaTypeDefinition = {
  name: "Helpful_Infos",
  type: "document",
  title: "Helpful Infos",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Headline",
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
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
