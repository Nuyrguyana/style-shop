import {makeAutoObservable} from 'mobx'

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
                id: 1,
                name: 'Apple EarPods',
                price: 5999,
                rating: 5,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewgam_BrdO_OIqrFzDdqLdbYI1mEZ6EZTBA&usqp=CAU'
            },
            {
                id: 2,
                name: 'Apple AirPods1',
                price: 15000,
                rating: 5,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzSt2diG-rlRrx4iA6Z8FAKojCJVpespU9ttWVjYNGqPbHxvlJd21DOjT689O3PUFi-k&usqp=CAU'
            },
            {
                id: 3,
                name: 'Apple AirPods Pro',
                price: 26000,
                rating: 5,
                img: 'https://superg.ru/wp-content/uploads/2019/11/P1450508.jpg'
            },
            {
                id: 4,
                name: 'Apple EarPods2',
                price: 27000,
                rating: 5,
                img: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1588156979435_379b9d365296_3.jpg'
            },
            {
                id: 5,
                name: 'Samsung AKG EO-IC100BWE',
                price: 1500,
                rating: 4,
                img: 'https://a.allegroimg.com/s720/1108b5/02ed062b4c39a2dd640375b58f1e/PRZEWODOWE-SLUCHAWKI-SAMSUNG-AKG-EO-IC100BWE-TYP-C'
            },
            {
                id: 6,
                name: 'Samsung GALAXY Buds+',
                price: 13000,
                rating: 4,
                img: 'https://ixbt.online/live/topics/preview/00/02/02/46/62ad61907d.png'
            },
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