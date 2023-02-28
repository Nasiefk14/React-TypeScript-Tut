interface RepositoreiesState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const reducer = (state: RepositoreiesState, action: any): RepositoreiesState => {
    switch(action.type){
        case 'searchRepositories':
            return { loading: true, error: null, data: []}
        case 'search_repositores_success':
            return { loading: false, error: null, data: action.payload}
        case 'search_repositories_error':
            return { loading: false, error: action.payload, data: []}
        default:
            return state
    }
};

export default reducer