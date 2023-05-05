package com.atomeistee.reactWithJava.repository;


import com.atomeistee.reactWithJava.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
