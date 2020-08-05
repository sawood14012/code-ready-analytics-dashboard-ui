import axios from 'axios'
export const state = () => ({
    busy: false,
    result: null,
    quality: null,
    others: null,
    generatedon : null,

});

export const getters = {
    getBusy: state => {
        return state.busy;
    },
    getQuality: state => {
        return state.quality;
    },
    getOthers: state => {
        return state.others;
    },
    getgeneratedon : state => {
        return state.generatedon;
    }
};

export const mutations = {
    setQuality(state, user) {
        state.quality = user;
    },

    setBusy(state, value) {
        state.busy = value;
    },

    setResult(state, value) {
        state.result = value;
    },
    setOthers(state, value) {
        state.others = value;
    },
    setGeneratedon(state,value){
        state.generatedon = value
    }

};

export const actions = {
    async getjson(context){
        try {
            context.commit("setBusy", true);
            let response = await axios.get("https://firebasestorage.googleapis.com/v0/b/go-ready-blockchain.appspot.com/o/dashboard_data%2Fresults.json?alt=media")
            const item = response.data
            context.commit("setResult", item);
            context.commit("setOthers", item['others']);
            context.commit("setGeneratedon", item['others'].generated_on)
            context.commit("setQuality", item['quality']);
            context.commit("setBusy", false);


        } catch (error) {

            context.commit("setBusy", false);
            console.log(error);
            throw error;

        }
    }

};
