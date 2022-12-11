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
      subPages: [
        {
          default: true,
          title: 'Listagem de produtos',
          subtitle: 'subtitle',
          url: '',
          icon: this.favIcos.list,
          showDetails: false,
        },
        {
          default: true,
          title: 'Criar produto',
          subtitle: 'subtitle',
          url: '/create',
          icon: 'add',
          showDetails: false,
        },
        // {
        //   default: true,
        //   title: 'Editar produto',
        //   subtitle: 'subtitle',
        //   url: '/edit',
        //   icon: 'cut',
        //   showDetails: false,
        // }
      ]
    },
    {
      title: 'Cotrole de estoque',
      url: '/stock',
      icon: 'paper',
      showDetails: false,
      subPages: [
        {
          default: false,
          title: 'Movimentações de produtos',
          subtitle: 'subtitle',
          url: '/movements',
          icon: this.favIcos.list,
          showDetails: false,
        },
        {
          default: true,
          title: 'Nova movimentação',
          subtitle: 'subtitle',
          url: '/movements/create',
          icon: 'add',
          showDetails: false,
        },
        // {
        //   default: true,
        //   title: 'Editar movimentação de produto',
        //   subtitle: 'subtitle',
        //   url: '/movements/edit',
        //   icon: 'add',
        //   showDetails: false,
        // },
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
