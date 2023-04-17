import { Rule, SchemaTypeDefinition } from "sanity";

//accueil schema
export const About: SchemaTypeDefinition = {
  name: "a_propos",
  type: "document",
  title: "A Propos",
  fields: [
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "a_propos_image",
      type: "image",
      title: "A Propos Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "youtube_urls",
      title: "Youtube URLs",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          type: "object",

          fields: [
            {
              name: "id1",
              title: "ID 1",
              type: "string",
            },
            {
              name: "id2",
              title: "ID 2",
              type: "string",
            },
            {
              name: "id3",
              title: "ID 3",
              type: "string",
            },
            {
              name: "id4",
              title: "ID 4",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  options: {
    singleton: true,
  },
};
