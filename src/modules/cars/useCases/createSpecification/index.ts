import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpeficicationController } from "./CreatespecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);

const createSpeficicationController = new CreateSpeficicationController(
    createSpecificationUseCase
);

export { createSpeficicationController };
