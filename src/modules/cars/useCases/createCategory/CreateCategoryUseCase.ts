/* eslint-disable prettier/prettier */
import { CategoriesRepository } from '../../repositories/implementations/categoriesRepository';


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadExists = this.categoriesRepository.findByName(name);
        // verificar se a categoria já existe
        if (categoryAlreadExists) {
            throw new Error("CategoryAlready exists");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
