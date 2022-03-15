import { deviceBasedDynamicDimension } from "./Util"

const Constant = {
    
}
const staticStyle={
    h45: deviceBasedDynamicDimension(45, true, 1),
    br6:deviceBasedDynamicDimension(6, true, 1),
    br10:deviceBasedDynamicDimension(10, true, 1),
    pa:deviceBasedDynamicDimension(10, true, 1),
    pt:deviceBasedDynamicDimension(10, true, 1),
    pb:deviceBasedDynamicDimension(10, true, 1),
    ps:deviceBasedDynamicDimension(10, true, 1),
    pe:deviceBasedDynamicDimension(10, true, 1),
    ps5:deviceBasedDynamicDimension(5, true, 1),
    pe5:deviceBasedDynamicDimension(5, true, 1),

    ms10:deviceBasedDynamicDimension(10, true, 1),
    me10:deviceBasedDynamicDimension(10, true, 1),

    

    fnt12:deviceBasedDynamicDimension(12, true, 1),
    fnt14:deviceBasedDynamicDimension(14, true, 1),
    fnt16:deviceBasedDynamicDimension(16, true, 1),
    fnt18:deviceBasedDynamicDimension(18, true, 1),
    fnt20:deviceBasedDynamicDimension(20, true, 1),
    fnt22:deviceBasedDynamicDimension(22, true, 1),

    icnHight:deviceBasedDynamicDimension(14, true, 1),
    icnWidth:deviceBasedDynamicDimension(14, true, 1)
}
export default {Constant,staticStyle}

