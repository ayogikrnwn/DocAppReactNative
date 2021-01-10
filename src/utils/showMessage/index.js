import {showMessage} from 'react-native-flash-message';
import { colors } from '../colors';

const showError = message => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white,
      });
}


const showSuccess = message => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: colors.primary,
        color: colors.white,
      });
}