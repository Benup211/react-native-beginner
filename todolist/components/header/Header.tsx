import { Image,Text,View } from "react-native";
import LogoImg from '../../assets/logo.png';
import {s} from './Header.style';
export default function Header(){
    return(
        <View>
            <Image style={s.logo} source={LogoImg} resizeMode="contain"/>
            <Text style={s.sub}>You probably have something to do.</Text>
        </View>
    );
}