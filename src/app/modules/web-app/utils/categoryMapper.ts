import { CategoryDTO } from '../interfaces/category.dto';
import { Category } from '../models/category.model';

export const mapCategoryDtoToCategoryModel = (dto: CategoryDTO) => {
  const category: Category = {
    id: dto.category_id,
    name: dto.category_name,
    imgUrl: dto.category_image,
  };

  return category;
};
