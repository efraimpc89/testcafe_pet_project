import { Selectors } from "testcafe";

class homePage {
    constructor(){
        //selectors
        this.titleSlider = Selector('".title-slider__slide-row"')
    }
}

export default new homePage()