import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
    const spec = createSwaggerSpec({
        apiFolder: "/home/kingsley/PetitePatteStyle/app/api",
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Documentation api Petitepattestyle",
                version: "1.0",
            },
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: "https",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
            },
            security: [],
        },
    });
    return spec;
};