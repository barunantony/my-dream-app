import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class ErrorAlertService {
    alertError = new EventEmitter<string>();

    constructor(private log: LoggingService) {
        this.alertError.subscribe((event) => {log.logMessage(`Event emitted @${Date.now()}: ${event}`)});
    }
}