/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var AppSidebarNavBadgePipe = /** @class */ (function () {
    function AppSidebarNavBadgePipe() {
    }
    /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    AppSidebarNavBadgePipe.prototype.transform = /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    function (item, args) {
        /** @type {?} */
        var classes = {
            'badge': true
        };
        /** @type {?} */
        var variant = "badge-" + item.badge.variant;
        classes[variant] = !!item.badge.variant;
        return classes;
    };
    AppSidebarNavBadgePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'appSidebarNavBadge'
                },] }
    ];
    return AppSidebarNavBadgePipe;
}());
export { AppSidebarNavBadgePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFjQSxDQUFDOzs7Ozs7SUFUQywwQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVMsRUFBRSxJQUFVOztZQUN2QixPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSTtTQUNkOztZQUNLLE9BQU8sR0FBRyxXQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUztRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQjs7SUFZRCw2QkFBQztDQUFBLEFBZEQsSUFjQztTQVhZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYXBwU2lkZWJhck5hdkJhZGdlJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2QmFkZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdiYWRnZSc6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHZhcmlhbnQgPSBgYmFkZ2UtJHtpdGVtLmJhZGdlLnZhcmlhbnR9YDtcbiAgICBjbGFzc2VzW3ZhcmlhbnRdID0gISFpdGVtLmJhZGdlLnZhcmlhbnQ7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuIl19