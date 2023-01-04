import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SideMenu {

  private favIcos = {
    list: 'list',
    tools: 'construct',
    trash: 'trash',
    send: 'paper-plane'
  }

  private routes = [
    {
      title: 'Produtos',
      url: '/products',
      icon: 'pricetags',
      showDetails: false,
      default: true,
      subtitle: 'subtitle'
    },
    {
      title: 'Cotrole de estoque',
      url: '/products',
      icon: 'paper',
      showDetails: false,
      default: true,
      subtitle: 'subtitle',
      subPages: [
        {
          default: true,
          title: 'Estoque',
          subtitle: 'subtitle',
          url: '/stock',
          icon: 'add',
          showDetails: false,
        },
        {
          default: false,
          title: 'Movimentações de produtos',
          subtitle: 'subtitle',
          url: '/movements',
          icon: this.favIcos.list,
          showDetails: false,
        }
      ]
    },
    {
      title: 'Fornecedores',
      url: '/suppliers',
      icon: 'person-add',
      showDetails: false,
      subPages: [
        {
          default: false,
          title: 'Listagem de Fornecedores',
          url: '',
          icon: 'contacts',
          showDetails: false,
        },
        {
          default: false,
          title: 'Criar fornecedor',
          url: '/create',
          icon: 'person-add',
          showDetails: false,
        },
      ]
    }
  ]

  get pages() {
    return this.routes
  }

  // get coreFeatures() {
  //   let routeCoreFeatures = []
  //   let routes = []

  //   this.routes.forEach( route => {
  //     routeCoreFeatures = route.subPages?.filter( subRoute => subRoute.coreFeat );

  //     if (routeCoreFeatures?.length>0) {
  //       routeCoreFeatures.forEach( coreFeat => {
  //         let featRoute = {
  //           title: coreFeat.title,
  //           url: route.url + coreFeat.url,
  //           icon: coreFeat.icon
  //         }

  //         routes.push(featRoute);
  //       })
  //     }
  //   })

  //   return routes
  // }

}
