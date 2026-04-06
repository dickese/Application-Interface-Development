import {atom} from 'recoil'


export const counterStore = atom({
    key: "counter",
    default: 0
})