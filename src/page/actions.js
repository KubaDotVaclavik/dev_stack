export const CHANGE_PAGE_VAL = 'CHANGE_PAGE_VAL';

export const changeVal = (e) => ({
    type: CHANGE_PAGE_VAL,
    payload: {
        value: e.target.value
    }
})