import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { sanityTheme } from "@/theme";

import { StudioNavbar } from "@/components/studioNavbar/StudioNavbar";
import { StudioLogo } from "@/components/studioLogo/StudioLogo";

// ENVIRONMENT VARIABLES
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
  name: "Dagaba_Content_Studio",
  title: "Dagaba Content Studio",
  basePath: "/studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
      logo: StudioLogo,
    },
  },
  theme: sanityTheme,
});
