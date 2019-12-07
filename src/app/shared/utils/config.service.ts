import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {

    _apiURI: string;
    _appUrl: string;
    constructor() {

        this._apiURI = 'assets/data.json';
        this._appUrl = "http://localhost:4200";
    }

    getApiURI() {
        return this._apiURI;
    }

    getAppUrl() {
        return this._appUrl;
    }
}
