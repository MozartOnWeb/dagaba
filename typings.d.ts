type Route = {
  params: {
    category: string;
  };
};

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
}

interface Medication extends Base {
  image: string;
  name: string;
  description: Description[];
  posologie: string;
  presentation: string;
  slug: string;
}
