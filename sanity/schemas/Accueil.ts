import { Rule, SchemaTypeDefinition } from "sanity";

//accueil schema
export const Accueil: SchemaTypeDefinition = {
  name: "accueil",
  type: "document",
  title: "Accueil",
  fields: [
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "hero_image",
      type: "image",
      title: "Hero Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "presentation_video",
      type: "string",
      title: "Video De Presentation",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "helps_image",
      type: "image",
      title: "Comment Dagaba Aide Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  options: {
    singleton: true,
  },
};
