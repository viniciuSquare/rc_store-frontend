import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './resolvers/products.resolver';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCategoriesResolver } from './resolvers/product-categories.resolver';
import { ProductCreationFormComponent } from './components/product-creation-form/product-creation-form.component';
import { ProductService } from './product.service';
import { ProductEditFormComponent } from './components/product-edit-form/product-edit-form.component';
import { CreateProductPage } from './pages/create-product/create.page';
import { EditProductPage } from './pages/edit/edit.page';
import { MovementsModule } from '../movements/movements.module';
import { ProductsIndexPage } from './pages/products/products.page';

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
    path: 'edit/:productId',
    component: EditProductPage,
    resolve: {
      products: ProductResolver,
      categories: ProductCategoriesResolver
    },
    data: {
      title: '{} | Products Page'
    }
  },
]

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsIndexPage,
    ProductCreationFormComponent,
    CreateProductPage,
    ProductEditFormComponent,
    EditProductPage
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MovementsModule
  ],
  providers: [ ProductService ],
  exports: [RouterModule]
})
export class ProductModule { }
