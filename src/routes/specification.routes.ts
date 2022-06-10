import { Router } from "express";

import { createSpeficicationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

// eslint-disable-next-line @typescript-eslint/no-empty-function
specificationsRoutes.post("/", (request, response) => {
    return createSpeficicationController.handle(request, response);
});

export { specificationsRoutes };
