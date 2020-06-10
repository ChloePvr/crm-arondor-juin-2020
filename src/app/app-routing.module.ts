import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'orders',
    loadChildren: () => import ('./orders/orders.module').then(m => m.OrdersModule)
  },
  {path : 'customers',
    loadChildren: () => import ('./customers/customers.module').then(m => m.CustomersModule)
  },
  {path : '**',
    loadChildren: () => import ('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
