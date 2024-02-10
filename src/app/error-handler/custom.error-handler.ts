import { ErrorHandler } from "@angular/core";

export class CustomErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert('Global error handled!')
        console.log(error)
    }

}