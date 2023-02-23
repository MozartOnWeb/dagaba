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

interface Category extends Base {
  name: string;
  description: string;
  number_of_stock: number;
  slug: string;
}
