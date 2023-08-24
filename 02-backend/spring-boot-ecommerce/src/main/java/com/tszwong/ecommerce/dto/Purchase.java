package com.tszwong.ecommerce.dto;

import com.tszwong.ecommerce.entity.Address;
import com.tszwong.ecommerce.entity.Customer;
import com.tszwong.ecommerce.entity.Order;
import com.tszwong.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
