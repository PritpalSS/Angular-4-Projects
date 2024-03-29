import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'users', loadChildren: './users/users.module#UsersModule' } //Lazy loading the users component
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(appRoutes)],
                    exports: [RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = function () { return []; };
    return AppRoutingModule;
}());
export { AppRoutingModule };
