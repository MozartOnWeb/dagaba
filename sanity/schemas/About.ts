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
              name: "url1",
              title: "URL 1",
              type: "url",
            },
            {
              name: "url2",
              title: "URL 2",
              type: "url",
            },
            {
              name: "url3",
              title: "URL 3",
              type: "url",
            },
            {
              name: "url4",
              title: "URL 4",
              type: "url",
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
