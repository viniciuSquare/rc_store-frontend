import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './resolvers/products.resolver';
import { ProductsIndexPage } from './pages/products-page/products.page';
import { CreateProductPage } from './pages/create-product/create-product.page';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCategoriesResolver } from './resolvers/product-categories.resolver';
import { ProductCreationFormComponent } from './components/product-creation-form/product-creation-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsIndexPage,
    resolve: {
      products: ProductResolver
    },
    data: {
      title: '{} | Products Page'
    }
  },
  {
    path: 'create',
    component: CreateProductPage,
    resolve: {
      categories: ProductCategoriesResolver
    },
    data: {
      title: '{} | Products Page'
    }
  },
  {
    path: 'edit',
    component: CreateProductPage,
    resolve: {
      categories: ProductResolver
    },
    data: {
      title: '{} | Products Page'
    }
  },
]

@NgModule({
  declarations: [
    ProductsIndexPage,
    ProductsListComponent,
    ProductCreationFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ProductModule { }
