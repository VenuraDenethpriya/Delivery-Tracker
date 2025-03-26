export const getCarriers = async (req, res, next) => {
    try {
        const Carriers = await Carriers.find();
        return res.json(Carriers);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=carriers.js.map