import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";
  private categoryUrl = "http://localhost:8080/api/product-category";

  constructor(private httpClient: HttpClient) {}

  getProduct(theProductId: number): Observable<Product> {
    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {
    // need to build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  getProductListPaginate(theCategoryId: number, thePage: number, thePageSize: number): Observable<GetResponseProducts> {
    // need to build URL based on category id, page, and page size
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}` + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    // need to build URL based on keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(thePage: number, thePageSize: number, theKeyword: string): Observable<GetResponseProducts> {
    // need to build URL based on keyword, page, and page size
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}` + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    // calls REST api and returns an observable, maps the JSON data from Spring Data REST to ProductCategory array
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    )
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,  // size of page i.e. how many items on each page
    totalElements: number,  // total number of elements in the database
    totalPages: number,  // total pages available
    number: number  // current page number
  }
}

interface GetResponseProductCategory {
  // unwraps the JSON from Spring Data REST _embedded entry
  _embedded: {
    productCategory: ProductCategory[];
  }
}