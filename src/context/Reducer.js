
export const loginReducer = (state,action) => {

    switch(action.type){

        case "loginStart" : return {
            ...state,
            isFetching:true
        }
        case "loginFailure" : return {
            ...state,
            userId:null,
            isFetching:false,
              error:true
        }
        case "loginSuccessfull" : return {
            ...state,
            isFetching:false,
            userId:action.payload,
            error:false
            
        }
        
        default:
            return state
    }
}