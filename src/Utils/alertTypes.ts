import { AlertTypes } from "../types/types";
import error from "../Assets/error.svg";
import warning from "../Assets/warning.svg";
import info from "../Assets/info.svg";
import success from "../Assets/success.svg";
export const alertSwitch = (type: AlertTypes) => {
    switch (type) {
        case AlertTypes.error:
            return {
                background: "#E6D0D0",
                color: "#EB5757",
                img: error,
                title: "Something wrong",
                description: "Ea dolor esse non anim laboris.",
            };
        case AlertTypes.warning:
            return {
                background: "#E7DED6",
                color: "#F2994A",
                img: warning,
                title: "Warning",
                description: "Ea dolor esse non anim laboris.",
            };
        case AlertTypes.success:
            return {
                background: "#C8D9CF",
                color: "#219653",
                img: success,
                title: "Success!",
                description: "Ea dolor esse non anim laboris.",
            };
        case AlertTypes.info:
            return {
                background: "#CADAE4",
                color: "#2F80ED",
                img: info,
                title: "Info",
                description: "Ea dolor esse non anim laboris.",
            };
    }
};
