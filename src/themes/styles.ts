import { StyleSheet } from 'react-native'
import Constant from '../utilities/Constant'
import colors from './colors'
const commonStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.white },
    centerView: { justifyContent: 'center', alignItems: 'center' },
    centerRow: { justifyContent: 'center' },
    centerCol: { alignItems: "center" },
    appIconStyle: {
        height: Constant.staticStyle.icnHight,
        width: Constant.staticStyle.icnWidth
    },
    appIconMargin: {
        marginEnd: Constant.staticStyle.ms10,
        marginStart: Constant.staticStyle.me10
    },
    appIconPadding: {
        padding: Constant.staticStyle.pa,
    }

})
export default commonStyles