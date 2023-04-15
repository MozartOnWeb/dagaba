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
      name: "image_daccueil",
      type: "image",
      title: "Image d'accueil",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "video_de_presentation",
      type: "url",
      title: "Video De Presentation",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "comment_dagaba_aide_image",
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
