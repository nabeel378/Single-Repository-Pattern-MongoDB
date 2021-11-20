export class ResponseModel<T> {
    //populate(entity: T): void;
    data?:T;
    isSuccess?:boolean;
    isServerError?:boolean;
    isUnAuthorized?:boolean;
    message?:string;
    serverError?:string;

    constructor(){
        this.isSuccess=true;
    }
    setError(message:string, isServerError:boolean = false):void
    {
            this.isSuccess = false;
            this.message = message;
            this.isServerError = isServerError;
    }
    setSuccess(message:string):void 
    {
        this.isSuccess = true;
        this.isServerError = false;
        this.message = message;
    }

    setSuccessAndData(data:T,message:string):void
    {
        this.data = data;
        this.isSuccess = true;
        this.isServerError = false;
        this.message = message;
    }

    setServerError(ex:any):void
    {
        this.serverError = ex;
        this.setError("ERROR: "+ex.message, true);
    }

   setUnAuthorized(message:string):void
    {
        this.isUnAuthorized = true;
        this.data = undefined;
        this.setError(message);
    }
}