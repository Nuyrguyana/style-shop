import {makeAutoObservable} from 'mobx'
import byz from '../components/image/s852I.png'
import ep from '../components/image/earPods.png'
import ep2 from '../components/image/earPods2.png'
import gerlax from '../components/image/gerlax.png'
import airPods from '../components/image/airPods.png'
import borofone from '../components/image/borofone.png'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Проводные наушники'},
            {id: 2, name: 'Беспроводные наушники'},
            {id: 3, name: 'Колонки'},
            {id: 4, name: 'Аксессуары'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Sony'},
            {id: 4, name: 'JBL'}
        ]
        this._devices = [
            {
                id: "1",
                img: byz,
                name: "Apple BYZ S852I",
                price: "2927",
                rate: "4.7"
            },
            {
                id: "2",
                img: ep,
                name: "Apple EarPods",
                price: "2327",
                rate: "4.5"
            },
            {
                id: "3",
                img: ep2,
                name: "Apple EarPods 2",
                price: "2327",
                rate: "4.5"
            },
            {
                id: "4",
                img: byz,
                name: "Apple BYZ S852I",
                price: "2927",
                rate: "4.7"
            },
            {
                id: "5",
                img: ep,
                name: "Apple EarPods",
                price: "2327",
                rate: "4.5"
            },
            {
                id: "6",
                img: ep2,
                name: "Apple EarPods 2",
                price: "2327",
                rate: "4.5"
            },
            {
                id: "7",
                img: airPods,
                name: "Apple AirPods",
                price: "9527",
                rate: "4.7"
            },
            {
                id: "1",
                img: gerlax,
                name: "Apple BYZ S852I",
                price: "2927",
                rate: "4.7"
            },
            {
                id: "9",
                img: borofone,
                name: "Borofone BO4",
                price: "7527",
                rate: "4.7"
            }
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}