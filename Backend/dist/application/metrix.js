export const getMatrix = async (req, res, next) => {
    try {
        const Matrix = await Matrix.find();
        return res.json(Matrix);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=metrix.js.map