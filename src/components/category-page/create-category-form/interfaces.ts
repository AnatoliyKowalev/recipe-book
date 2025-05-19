export interface CreateCategoryFormProps {
  defaultData?: CreateCategoryFormData & { id: string };
}

export interface CreateCategoryFormData {
  name: string;
  image: string;
}
