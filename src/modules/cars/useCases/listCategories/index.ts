import { CategoriesRepository } from "../../repositories/implementations/categoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };
