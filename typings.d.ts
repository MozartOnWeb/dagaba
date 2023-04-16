type Route = {
  params: {
    category: string;
    medication: string;
  };
};

interface Home {
  image_daccueil: string;
  video_de_presentation: string;
  comment_dagaba_aide_image: string;
}

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

interface Description {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

interface Category extends Base {
  name: string;
  description: string;
  number_of_stock: number;
  slug: string;
  image: string;
}

interface Medication extends Base {
  image: string;
  name: string;
  featured: boolean;
  description: string;
  posologie: string;
  composition: string;
  presentation: string;
  categories: Category[];
  slug: string;
}
interface HelpfulInfo extends Base {
  headline: string;
  introduction: string;
  content: [];
}
