export function not_found_error(entity: string){
    return{
        type: "error_not_found",
        message: `Unable to find the given ${entity}`
    }
}