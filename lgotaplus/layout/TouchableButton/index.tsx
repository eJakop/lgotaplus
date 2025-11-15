
import { COLORS } from '@/constatns/ui';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

// Типы для пропсов
interface TouchableButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  activeOpacity?: number;
}

const TouchableButton: React.FC<TouchableButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  activeOpacity = 0.7,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={activeOpacity}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={[styles.buttonText, disabled && styles.disabledText, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMERY_BUTTON,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
    opacity: 0.6,
  },
  disabledText: {
    color: '#666666',
  },
});

export default TouchableButton;