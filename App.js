import {TabNavigator} from "react-navigation";

import Screen1 from "./tabs/screen1"
import Screen2 from "./tabs/screen2"
import Screen3 from "./tabs/screen3"

var myTabs = TabNavigator({
    Tab1 : {screen:Screen1},
    Tab2 : {screen:Screen2},
    Tab3 : {screen:Screen3}
});

export default myTabs;