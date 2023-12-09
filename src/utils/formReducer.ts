type INITIAL_TYPE = {
    firstname: string,
    lastname: string,
    email: string,
    selectedOption: string,
    textValue: string,

}
export const INITIAL_VALUE: INITIAL_TYPE = {
    firstname: "",
    lastname: "",
    email: "",
    selectedOption: "",
    textValue: "",
}

type Action_Type = {
    type: "CHANGE_INPUT" | 'VALUE_SUBMIT' ;
    payload: {
        name: string,
        value: string | {},
    } | any;

};


export const formReducer = (state: INITIAL_TYPE, action: Action_Type) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'VALUE_SUBMIT':
            return {
                ...state,
              INITIAL_VALUE : action.payload.value
            }
        default:
            return state;
    }
}





