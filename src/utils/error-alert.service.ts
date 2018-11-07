import { EventEmitter } from "@angular/core";

export class ErrorAlertService {
    alertError = new EventEmitter<string>();
}