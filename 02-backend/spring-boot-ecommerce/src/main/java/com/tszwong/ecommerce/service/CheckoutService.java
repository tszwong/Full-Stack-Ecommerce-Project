package com.tszwong.ecommerce.service;

import com.tszwong.ecommerce.dto.Purchase;
import com.tszwong.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
