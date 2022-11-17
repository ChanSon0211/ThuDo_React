const inititalState = {
model : {
    topclothes: "images/clothes/topcloth2.png",
    botclothes : "images/clothes/botcloth1.png",
    hairstyle : "images/hairstyle/hairstyle1.png",
    handbags : "images/handbags/handbag1.png",
    necklaces : "images/necklaces/necklace3.png",
    shoes : "images/shoes/shoes1.png",
    background: "images/background/background1.jpg"

}
}
const modelReducer = (state = inititalState ,action) => {
    switch (action.type) {
        case 'CHANGE_MODEL': {
            const newModel = {...state.model}
            newModel[action.payload.type] = action.payload.value
            return{...state, model:newModel}
        }
        default:
          return state
    }
}

export default modelReducer ; 