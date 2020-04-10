import {Routes} from '@angular/router'
import {HomeContainer} from './containers/home/home.container'
import {BasketContainer} from './containers/basket/basket.container'
import {DetailContainer} from './containers/detail/detail.container'
import {ErrorContainer} from './containers/error/error.container'
import {HttpStatusCode} from './shared/enums/http-status-code'
import {DetailResolverService} from './containers/detail/detail-resolver.service'

export const appRoutes: Routes = [
  {path: 'home', component: HomeContainer, data: {title: '> bibliothèque'}},
  {
    path: 'detail/:id',
    component: DetailContainer,
    resolve: {book: DetailResolverService}
  },
  {path: 'basket', component: BasketContainer, data: {title: '> Panier'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'error', component: ErrorContainer, data: {errorCode: HttpStatusCode.NOT_FOUND}},
  {path: '**', component: ErrorContainer, data: {errorCode: HttpStatusCode.NOT_FOUND}}
]

export type StaticPageData = {
  title: string
}

export type StaticErrorPageData = {
  errorCode: HttpStatusCode
}
