"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = void 0;
const notFoundMiddleware = (req, res, next) => {
    res.status(404).render("client/pages/errors/404", {
        pageTitle: "404 Not Found",
    });
};
exports.notFoundMiddleware = notFoundMiddleware;
