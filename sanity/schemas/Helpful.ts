import { Rule, SchemaTypeDefinition } from "sanity";

//medication categories schema
export const Helpful: SchemaTypeDefinition = {
  name: "Helpful_Infos",
  type: "document",
  title: "Helpful Infos",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
