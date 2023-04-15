import { getAllCategories, getAllMedications } from "@/sanity/fetch";

export default async function sitemap() {
  const categories = await getAllCategories();
  const medications = await getAllMedications();

  const categoriesRoutes = categories.map((category: Category) => ({
    url: `https://dagaba.net/categories/${category.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const medicationsRoutes = medications.map((medication: Medication) => ({
    url: `https://dagaba.net/categories/category/${medication.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "/categories", "/about"].map((route) => ({
    url: `https://dagaba.net${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...categoriesRoutes, ...medicationsRoutes];
}
