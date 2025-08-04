const asyncHandler = (requestFunction) => {
    return async (req, res, next) => {
        try {
            requestFunction(req,res)
        } catch(error) {
            next(error)
        }
    }
}

export default asyncHandler