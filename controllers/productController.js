const Product = require("../models/product");

const getProducts = async (req, res) => {
    try {
        const queryObject = {};
        const { name, sortBy, sortOrder,selectBy } = req.query; 
        if (name) {
            queryObject.name = { $regex: new RegExp(name, 'i') };
        }

        let sortCriteria = {};
        if (sortBy) {
            // Split sortBy parameter into an array of fields to sort by
            const sortByFields = sortBy.split(',');
            sortByFields.forEach(field => {
                // For each field, set ascending order by default
                sortCriteria[field] = sortOrder === 'desc' ? -1 : 1; 
            });
        }
        let productQuery = Product.find(queryObject)
        if (selectBy) {
            // Split sortBy parameter into an array of fields to sort by
            const selectByFields = selectBy.split(',');
            productQuery = productQuery.select(selectByFields.join(" "))
        }

        let page = Number(req.query.page) || 1
        let limit = Number(req.query.limit) || 2

        let skip = ( page - 1 ) * limit
        productQuery = productQuery.skip(skip).limit(limit)


        let productData;
        if (Object.keys(sortCriteria).length > 0) {
            productData = await productQuery.sort(sortCriteria)// Sort by the specified fields
        } else {
            productData = await productQuery;
        }

        // Send response
        res.status(200).json({ productData , totalRecords:productData.length});
    } catch (error) {
        console.error("Error in getProducts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getProducts };
