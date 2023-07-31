package com.max.appserver.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iod;
    private String orderproducts;
    private String orderdate;
    private int ordertotal;
    private String orderaddress;
    private String paymentmode;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    public Long getIod() {
        return iod;
    }

    public void setIod(Long iod) {
        this.iod = iod;
    }

    public String getOrderproducts() {
        return orderproducts;
    }

    public void setOrderproducts(String orderproducts) {
        this.orderproducts = orderproducts;
    }

    public String getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(String orderdate) {
        this.orderdate = orderdate;
    }

    public int getOrdertotal() {
        return ordertotal;
    }

    public void setOrdertotal(int ordertotal) {
        this.ordertotal = ordertotal;
    }

    public String getOrderaddress() {
        return orderaddress;
    }

    public void setOrderaddress(String orderaddress) {
        this.orderaddress = orderaddress;
    }

    public String getPaymentmode() {
        return paymentmode;
    }

    public void setPaymentmode(String paymentmode) {
        this.paymentmode = paymentmode;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
