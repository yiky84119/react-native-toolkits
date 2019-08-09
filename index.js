import { NativeModules } from "react-native";
var Toolkits = NativeModules.RNToolkits;


class QRCoode {
    static decode(path, callback) {
        return Toolkits.decode(path, callback);
    }
}

class Toast {
    static showMessage(message, duration, position) {
        Toolkits.show({
            message: message,
            duration: duration,
            position: position,
        });
    }
    static showShortTop(message) {
        Toast.showMessage(message, 'short', 'top');
    }

    static showShortCenter(message) {
        Toast.showMessage(message, 'short', 'center');
    }

    static showShortBottom(message) {
        Toast.showMessage(message, 'short', 'bottom');
    }

    static showLongTop(message) {
        Toast.showMessage(message, 'long', 'top');
    }

    static showLongCenter(message) {
        Toast.showMessage(message, 'long', 'center');
    }

    static showLongBottom(message) {
        Toast.showMessage(message, 'long', 'bottom');
    }

    static show(message) {
        Toast.showMessage(message, 'short', 'bottom');
    };
}

module.exports = {
    QRCoode,
    Toast
}
