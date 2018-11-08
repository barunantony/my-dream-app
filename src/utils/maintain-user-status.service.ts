import { EventEmitter, Injectable } from "@angular/core";

const findUserIndex = (user: string, list: string[]) => {
    const indx = list.findIndex((itm) => itm === user);

    return indx;
}

@Injectable({providedIn: 'root'})
export class MaintainUserStatusService {

    activeUsers = ['ABC', 'DEF', 'HIJ'];
    inactiveUsers = ['XYZ', 'LMN', 'PQRST'];

    toggleUserEvent = new EventEmitter<{user: string, status: string}>();

    constructor() {
        this.toggleUserEvent.subscribe((evt) => this.toggleUser(evt.user, evt.status));
    }

    toggleUser (user: string, status: string) {
        if (status === 'active') {
            this.inactiveUsers.push(user);
            const userIndx = findUserIndex(user, this.activeUsers);
            userIndx !== -1 && this.activeUsers.splice(userIndx, 1);
        } else {
            this.activeUsers.push(user);
            const userIndx = findUserIndex(user, this.inactiveUsers);
            userIndx !== -1 && this.inactiveUsers.splice(userIndx, 1);
        }
    }
}