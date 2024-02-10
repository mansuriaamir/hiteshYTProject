const asyncHandler = (rqeuestHandler) => {
     ( req, res, next) => {
            Promise
            .resolve(rqeuestHandler(req, res, next))
            .catch((err) => next(err))
     }
}


//Using try catch
// const asyncHndler = (fn) => ( req, res, next) => {
//     try {
//         await fn( req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

//How above function works
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => { () => {

// }}
// const asyncHandler = (func) => { async () => {

// }}

export default asyncHndler