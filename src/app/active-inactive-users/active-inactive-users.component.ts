import { Component } from "@angular/core";
import { MaintainUserStatusService } from "src/utils/maintain-user-status.service";

@Component({
    selector: 'app-active-inactive-users',
    templateUrl: './active-inactive-users.component.html',
    styleUrls: ['./active-inactive-users.component.css']
})
export class ActiveInactiveUsersCompoent {

    activeUsers: string[];
    inactiveUsers: string[];

    constructor (private userService: MaintainUserStatusService) {
        this.activeUsers = userService.activeUsers;
        this.inactiveUsers = userService.inactiveUsers;
    }

    toggleUser(user: string, status: string) {
        this.userService.toggleUserEvent.emit({user, status});
    }

}