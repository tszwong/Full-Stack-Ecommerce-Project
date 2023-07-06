package com.tszwong.ecommerce.dao;

import com.tszwong.ecommerce.entity.Product;
import com.tszwong.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// @RepositoryRestResource(collectionResourceRel={Name of JSON Entry}, path={reference of path})
@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
