package com.tszwong.ecommerce.dao;

import com.tszwong.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

// @CrossOrigin accepts calls from web browser scripts from this origin
// Origin = protocl + hostname + port
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
}
