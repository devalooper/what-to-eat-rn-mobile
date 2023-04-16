import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


type IconType = {
  name: React.ComponentProps<typeof FontAwesome | typeof Ionicons>['name'] | string;
  color: string;
  type: 'FontAwesome' | 'Ionicons';
  size?: number;
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default function Icon({ size = 24, name, type, color, ...props }: IconType) {
  switch (type) {
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} style={iconStyles.icon} {...props} />;
    case 'Ionicons':
      return <Ionicons name={name} size={size} style={iconStyles.icon} {...props} />; 
  }
}

const iconStyles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  }
})