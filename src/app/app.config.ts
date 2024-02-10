import { ApplicationConfig, ErrorHandler } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { CustomErrorHandler } from "./error-handler/custom.error-handler";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToeknInterceptor } from "./interceptor/token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    // { provide: HTTP_INTERCEPTORS, useClass: ToeknInterceptor, multi: true },
  ],
};
