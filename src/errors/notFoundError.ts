export function not_found_error(entity: string){
    return{
        type: "Error_not_found",
        message: `Unable to find the given ${entity}`
    }
}