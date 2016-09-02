export const CHANGE_PAGE_VAL = 'CHANGE_PAGE_VAL'


export default (state = { val: 'init value' }, action) => {
    const payload = action.payload

    switch (action.type) {
        case CHANGE_PAGE_VAL:
            return Object.assign({}, state, { val: payload.value })

        default:
            return state;
    }
}