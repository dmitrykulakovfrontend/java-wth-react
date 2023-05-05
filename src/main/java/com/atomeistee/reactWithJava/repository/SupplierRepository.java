package com.atomeistee.reactWithJava.repository;


import com.atomeistee.reactWithJava.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {

}
