import { TouchableOpacity, Text, Image } from "react-native";
import checkImg from "../../assets/check.png";
import { s } from "./CardTodo.style";
import { FC } from "react";
interface cardDataProps {
    cardData: {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    cardPressed: Function;
}
const CardTodo: FC<cardDataProps> = ({ cardData,cardPressed }) => {
    return (
        <TouchableOpacity style={s.card} onPress={()=>cardPressed(cardData)}>
            <Text
                style={[
                    s.title,
                    cardData.isCompleted && {
                        textDecorationLine: "line-through",
                    },
                ]}
            >
                {cardData.title}
            </Text>
            {cardData.isCompleted && (
                <Image source={checkImg} style={s.image} />
            )}
        </TouchableOpacity>
    );
};

export default CardTodo;
