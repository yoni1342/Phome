import AsyncStorage from "@react-native-async-storage/async-storage";

module.exports = {
    setAuthToken: (token) => {
        AsyncStorage.setItem("token", token);
    },

    removeAuthToken: () => {
        AsyncStorage.removeItem("token");
    },

    getAuthToken: async () => {
        return await AsyncStorage.getItem("token");
    }

};