class ApiError extends Error {
    constructor( statusCode, messege= "Something Went Wrong!", errors = [], stack = "") {
      super(messege)
      this.statusCode = statusCode
      this.data = null
      this.message = messege
      this.success = false
      this.errors = errors
       
      if(stack){
        this.stack = stack
      } else {
        Error.captureStackTrace( this, this.constructor)
      }
    }
}

export default ApiError